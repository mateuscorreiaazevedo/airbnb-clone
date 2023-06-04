import { create } from 'zustand'

type StoreProps = {
  open: boolean
  setOpen: () => void
}

export const useFiltersModal = create<StoreProps>(set => ({
  open: false,
  setOpen: () => {
    set(state => ({ open: !state.open }))
  }
}))
