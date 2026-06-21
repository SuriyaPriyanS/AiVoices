'use client'

import { useEffect } from 'react'
import { listVoices } from '@/services/voiceService'
import { useVoiceStore } from '@/stores/voiceStore'

export function useVoices() {
  const { voices, loading, setLoading, setVoices } = useVoiceStore()

  useEffect(() => {
    let mounted = true
    setLoading(true)
    listVoices()
      .then((items) => {
        if (mounted) setVoices(items)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [setLoading, setVoices])

  return { voices, loading }
}
