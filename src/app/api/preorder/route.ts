// Deprecated: Preorder flow removed in favor of Stripe Checkout
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST() {
  return NextResponse.json({ error: 'Preorder disabled. Use /api/checkout.' }, { status: 410 });
}