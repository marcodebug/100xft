import { NextRequest } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : (null as unknown as Stripe);

export async function GET(req: NextRequest) {
  try {
    if (!stripeSecretKey) {
      return new Response('Stripe is not configured', { status: 500 });
    }

    const origin = req.headers.get('origin') ?? new URL(req.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: `${origin}/?test=success`,
      cancel_url: `${origin}/?test=cancelled`,
      payment_method_types: ['card'],
      payment_intent_data: {
        description: 'Test $1 Payment | 100XFT',
        statement_descriptor: '100XFT',
        statement_descriptor_suffix: 'TEST'
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 100, // $1.00
            product_data: {
              name: 'Test $1 Payment',
              description: 'Temporary test checkout link for validation',
            },
          },
          quantity: 1,
        },
      ],
    });

    if (!session.url) {
      return new Response('Failed to create session', { status: 500 });
    }

    return new Response(null, {
      status: 303,
      headers: { Location: session.url },
    });
  } catch (err: any) {
    console.error('Stripe $1 test error:', err);
    return new Response(err.message ?? 'Checkout failed', { status: 500 });
  }
}


