'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

function getString(formData, key) {
  return String(formData.get(key) || '').trim()
}

export async function login(formData) {
  const supabase = await createClient()
  if (!supabase) redirect('/dashboard?demo=1')

  const email = getString(formData, 'email')
  const password = getString(formData, 'password')
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) redirect('/login?error=auth')
  redirect('/dashboard')
}

export async function signup(formData) {
  const supabase = await createClient()
  if (!supabase) redirect('/dashboard?demo=1')

  const email = getString(formData, 'email')
  const password = getString(formData, 'password')
  const name = getString(formData, 'name')

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { workspace_name: name } },
  })

  if (error) redirect('/signup?error=auth')
  redirect('/dashboard')
}

export async function resetPassword(formData) {
  const supabase = await createClient()
  if (!supabase) redirect('/forgot-password?sent=demo')

  const email = getString(formData, 'email')
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password`,
  })

  if (error) redirect('/forgot-password?error=auth')
  redirect('/forgot-password?sent=1')
}

export async function updatePassword(formData) {
  const supabase = await createClient()
  if (!supabase) redirect('/dashboard?demo=1')

  const password = getString(formData, 'password')
  const { error } = await supabase.auth.updateUser({ password })

  if (error) redirect('/reset-password?error=auth')
  redirect('/dashboard/settings?password=updated')
}

export async function logout() {
  const supabase = await createClient()
  if (supabase) await supabase.auth.signOut()
  redirect('/')
}
