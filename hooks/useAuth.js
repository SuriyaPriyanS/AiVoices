'use client'

import { useAuthStore } from '@/stores/authStore'

export function useAuth() {
  const { profile, setProfile, clearProfile } = useAuthStore()
  return { profile, setProfile, clearProfile, signedIn: Boolean(profile) }
}
