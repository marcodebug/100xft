import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { z } from 'zod';
import { plans, isEarlyAccessActive, earlyAccess } from '@/data/plans';
import { AccountSize } from '@/types/plan';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn('Stripe secret key is not set. Set STRIPE_SECRET_KEY in your environment.');
}

// Use SDK's default pinned API version to avoid type mismatches during deploys
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : (null as unknown as Stripe);

const bodySchema = z.object({
  planId: z.enum(['one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant', 'futures']),
  accountSize: z.number(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  country: z.string().optional()
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { planId, accountSize, name, email, country } = bodySchema.parse(json);

    const plan = plans.find(p => p.id === planId);
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const rule = plan.rules[accountSize as AccountSize];
    if (!rule) {
      return NextResponse.json({ error: 'Invalid account size for selected plan' }, { status: 400 });
    }

    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const origin = req.headers.get('origin') ?? new URL(req.url).origin;

    const baseAmount = rule.price;
    const discountAmount = isEarlyAccessActive() ? Math.round(baseAmount * (1 - earlyAccess.discountPercent / 100)) : baseAmount;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      payment_method_types: ['card'],
      customer_email: email,
      payment_intent_data: {
        description: `${plan.label} — ${accountSize / 1000}K Account | 100XFT` ,
        statement_descriptor: '100XFT',
        statement_descriptor_suffix: 'CHALLENGE'
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(discountAmount * 100),
            product_data: {
              name: `${plan.label} — ${accountSize / 1000}K Account`,
              description: '100XFT trading challenge checkout',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        planId,
        accountSize: String(accountSize),
        name: name ?? '',
        country: country ?? ''
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout error:', err);
    return NextResponse.json({ error: err.message ?? 'Checkout failed' }, { status: 500 });
  }
}


