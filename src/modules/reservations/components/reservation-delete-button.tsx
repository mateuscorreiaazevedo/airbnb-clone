'use client'

import { setNotification } from '@/modules/core'
import React from 'react'
import { reservationService } from '../service/reservation-service'
import { useRouter } from 'next/navigation'

type Props = {
  reservationId: string
}

export const ReservationDeleteButton: React.FC<Props> = ({ reservationId }) => {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleDeleteReservation = async () => {
    setLoading(true)

    try {
      const message = await reservationService.deleteReservation(reservationId)
      setNotification(message, 'success')
      router.refresh()
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }

  }

  return (
    <button disabled={loading} onClick={handleDeleteReservation} className='font-semibold text-white bg-rose-500 w-full rounded-lg py-1 hover:bg-rose-500/90 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-600'>
      Cancelar Reserva
    </button>
  )
}
