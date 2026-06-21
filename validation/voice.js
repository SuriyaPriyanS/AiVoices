import { z } from 'zod'

export const voiceSchema = z.object({
  name: z.string().min(2).max(80),
  style: z.string().min(2).max(160).optional(),
})

export const agentSchema = z.object({
  name: z.string().min(2).max(80),
  industryId: z.string().min(2),
  prompt: z.string().min(20),
  voice: z.string().min(2),
})
