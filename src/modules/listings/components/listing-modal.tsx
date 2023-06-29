'use client'

import { useModalDescription } from '../hooks/use-modal-description'
import { Modal } from '@/main/ui'
import { X } from 'lucide-react'
import React from 'react'

const ListingModal = () => {
  const { open, setOpen, room } = useModalDescription()

  function closeModal() {
    setOpen()
  }

  return (
    <Modal
      isOpen={open}
      toggleOpenChange={setOpen}
    >
      <div className="fixed animate-modal w-modal min-h-modal shadow-md border border-zinc-300 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-white rounded-lg">
        <section className="flex w-full items-center px-4 h-16 border-b border-zinc-300">
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="flex-1 text-center font-bold text-lg">Descrição</h2>
        </section>
        <section className="p-8 space-y-4">
          {room?.description}
        </section>
      </div>
    </Modal>
  )
}

export default ListingModal
