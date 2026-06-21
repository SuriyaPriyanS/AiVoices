import { z } from 'zod'

export const emailSchema = z.string().email()

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(8),
})

export const signupSchema = loginSchema.extend({
  name: z.string().min(2).max(80),
})
