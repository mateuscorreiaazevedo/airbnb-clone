import { create } from 'zustand'

type States = {
  mounted: boolean
  setMounted: () => void
}

export const useMountedClient = create<States>(set => ({
  mounted: true,
  setMounted: () => {
    set(() => ({ mounted: false }))
  }
}))
