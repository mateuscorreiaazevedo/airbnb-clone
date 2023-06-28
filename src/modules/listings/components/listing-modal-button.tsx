'use client'
import React from 'react'
import { useModalDescription } from '../hooks/use-modal-description'

type Props = {
  room: Listing
}

export const ListingModalButton = ({ room }: Props) => {
  const { setOpen, setRoom } = useModalDescription()

  async function handleOpenModal() {
    setRoom(room)
    setOpen()

  }

  return (
    <button className='underline self-start' onClick={handleOpenModal}>
      ver mais
    </button>
  )
}
