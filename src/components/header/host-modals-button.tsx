'use client'
import { useLoginModal } from '@/modules/auth'
import { Plus } from 'lucide-react'
import React from 'react'

export const HostModalsButton = () => {
  const { setOpen } = useLoginModal()

  return (
    <button onClick={() => setOpen()} className="w-fit px-6 text-lg font-semibold py-3 flex items-center justify-center gap-2 text-white bg-gradient-to-l from-rose-500 to-pink-500 rounded-lg">
      <Plus size={28} /> Anúnicio Fácil Airbnb
    </button>
  )
}
