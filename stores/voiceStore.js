import { create } from 'zustand'

export const useVoiceStore = create((set) => ({
  voices: [],
  loading: false,
  setVoices: (voices) => set({ voices }),
  addVoice: (voice) => set((state) => ({ voices: [voice, ...state.voices] })),
  setLoading: (loading) => set({ loading }),
}))
