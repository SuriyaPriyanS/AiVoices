import { NextResponse } from 'next/server'
import { industries } from '@/lib/demo-data'

export async function POST(request) {
  const body = await request.json().catch(() => ({}))
  const industry = industries.find((item) => item.id === body.industryId) || industries[0]

  return NextResponse.json({
    id: crypto.randomUUID(),
    status: 'draft',
    agent: {
      name: body.name || `${industry.name} Agent`,
      industry: industry.id,
      prompt: body.prompt || industry.prompt,
      voice: body.voice || 'Warm, concise, professional',
    },
    nextSteps: ['connect_voice_provider', 'connect_llm_provider', 'publish_phone_number'],
  })
}

export async function GET() {
  return NextResponse.json({
    status: 'ready',
    message: 'POST an agent configuration to create a draft voice agent.',
  })
}
