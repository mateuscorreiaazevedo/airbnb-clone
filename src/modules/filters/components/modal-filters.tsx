'use client'

// Contents
import { SlidersHorizontal } from 'lucide-react'

// Components
import { Modal } from '@/main/ui'
import React from 'react'

const ModalFilters = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      button={
        <button className="hidden md:flex text-zinc-950 text-sm items-center bg-white gap-2 border border-zinc-300 px-4 py-2 rounded-md">
          <SlidersHorizontal size={12} /> Filtros
        </button>
      }
      isOpen={open}
      toggleOpenChange={setOpen}
    >
      <div className="absolute w-modal min-h-modal shadow-md border border-zinc-300 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-white rounded-lg">
        Filtros
      </div>
    </Modal>
  )
}

export default ModalFilters
