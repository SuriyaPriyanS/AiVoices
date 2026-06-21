import { NextResponse } from 'next/server'

const voices = [
  { id: 'warm-receptionist', name: 'Warm Receptionist', status: 'ready' },
  { id: 'service-advisor', name: 'Service Advisor', status: 'ready' },
  { id: 'restaurant-host', name: 'Restaurant Host', status: 'ready' },
]

export async function GET() {
  return NextResponse.json({ voices })
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}))

  return NextResponse.json(
    {
      voice: {
        id: crypto.randomUUID(),
        name: body.name || 'New voice',
        status: 'processing',
      },
    },
    { status: 201 }
  )
}
