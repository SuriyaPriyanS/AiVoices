import { create } from 'zustand'

export const useGenerationStore = create((set) => ({
  drafts: [],
  selectedDraft: null,
  addDraft: (draft) => set((state) => ({ drafts: [draft, ...state.drafts] })),
  selectDraft: (draft) => set({ selectedDraft: draft }),
}))
