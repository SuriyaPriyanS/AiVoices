import { NextResponse } from 'next/server'

export async function POST(request) {
  const payload = await request.text()

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({
      received: true,
      mode: 'demo',
      bytes: payload.length,
    })
  }

  return NextResponse.json({
    received: true,
    message: 'Add Stripe signature verification before production billing.',
  })
}
