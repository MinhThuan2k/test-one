import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type VisaState = {
  nationality: Record<string, any> | null
  destination: Record<string, any> | null
  config: Record<string, any> | null
  setNationality: (value: Record<string, any> | null) => void
  setDestination: (value: Record<string, any> | null) => void
  setConfig: (value: Record<string, any> | null) => void
  reset: () => void
}

export const useVisaStore = create<VisaState>()(
  persist(
    (set) => ({
      nationality: null,
      destination: null,
      config: null,
      setNationality: (value) => set({ nationality: value }),
      setDestination: (value) => set({ destination: value }),
      setConfig: (value) => set({ config: value }),
      reset: () => set({ nationality: null, destination: null, config: null })
    }),
    {
      name: 'visa-storage'
    }
  )
)
