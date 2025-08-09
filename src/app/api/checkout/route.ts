import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { z } from 'zod';
import { plans } from '@/data/plans';
import { AccountSize } from '@/types/plan';

export const dynamic = 'force-dynamic';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn('Stripe secret key is not set. Set STRIPE_SECRET_KEY in your environment.');
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' }) : null as unknown as Stripe;

const bodySchema = z.object({
  planId: z.enum(['one-phase-fx', 'two-phase-fx', 'crypto-one', 'crypto-two', 'instant', 'futures']),
  accountSize: z.number()
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const { planId, accountSize } = bodySchema.parse(json);

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

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(rule.price * 100),
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
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout error:', err);
    return NextResponse.json({ error: err.message ?? 'Checkout failed' }, { status: 500 });
  }
}


