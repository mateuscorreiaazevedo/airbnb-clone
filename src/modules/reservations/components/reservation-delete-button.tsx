'use client'

import { setNotification } from '@/modules/core'
import React from 'react'

type Props = {
  reservationId: string
}

export const ReservationDeleteButton: React.FC<Props> = ({ reservationId }) => {

  const handleDeleteReservation = () => {
    setNotification(`Delete ${reservationId}`)
  }

  return (
    <button onClick={handleDeleteReservation} className='font-semibold text-white bg-rose-500 w-full rounded-lg py-1 hover:bg-rose-500/90 transition-colors'>
      Cancelar Reserva
    </button>
  )
}
