'use server'

import { revalidatePath } from 'next/cache'
import { agentSchema, voiceSchema } from '@/validation/voice'

function formObject(formData) {
  return Object.fromEntries(formData.entries())
}

export async function createVoice(formData) {
  const parsed = voiceSchema.safeParse(formObject(formData))
  if (!parsed.success) return { ok: false, error: 'Invalid voice details' }

  revalidatePath('/dashboard/voices')
  return { ok: true, voice: { id: crypto.randomUUID(), ...parsed.data } }
}

export async function createAgent(formData) {
  const parsed = agentSchema.safeParse(formObject(formData))
  if (!parsed.success) return { ok: false, error: 'Invalid agent details' }

  revalidatePath('/dashboard')
  return { ok: true, agent: { id: crypto.randomUUID(), ...parsed.data } }
}
