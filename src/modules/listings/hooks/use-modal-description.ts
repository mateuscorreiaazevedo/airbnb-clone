import { create } from 'zustand'

type States = {
  open: boolean
  setOpen: () => void
  setRoom: (room?: Listing) => void
  room: Listing | undefined
}

export const useModalDescription = create<States>(set => ({
  open: false,
  room: undefined,
  setRoom: (room?: Listing) => {
    set({ room })
  },
  setOpen: () => {
    set(state => ({ open: !state.open }))
  }
}))
