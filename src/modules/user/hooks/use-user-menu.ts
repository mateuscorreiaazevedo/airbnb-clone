import { create } from 'zustand'

type StoreProps = {
  open: boolean
  setOpen: (value?: boolean) => void
}

export const useUserMenu = create<StoreProps>(set => ({
  open: false,
  setOpen: (value?: boolean) => {
    set(state => ({ open: value ?? !state.open }))
  }
}))
