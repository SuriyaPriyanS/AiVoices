'use client'

import { createAgentDraft } from '@/services/generationService'
import { useGenerationStore } from '@/stores/generationStore'

export function useGenerations() {
  const { drafts, addDraft, selectedDraft, selectDraft } = useGenerationStore()

  async function createDraft(payload) {
    const draft = await createAgentDraft(payload)
    addDraft(draft)
    return draft
  }

  return { drafts, selectedDraft, selectDraft, createDraft }
}
