'use client'

import { reservationService } from '../service/reservation-service'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import { FC, useState } from 'react'

interface Props {
  reservationId: string
}

export const DeleteReservationButton: FC<Props> = ({ reservationId }) => {
  const [loading, setLoading] = useState(false)
  const { refresh } = useRouter()

  async function handleDeleteOldReservation() {
    setLoading(true)
    try {
      await reservationService.deleteReservation(reservationId)
      setNotification('Viagem excluída', 'success')
      refresh()
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDeleteOldReservation}
      className="absolute top-4 right-4"
      disabled={loading}
    >
      <Trash2 className="text-white fill-zinc-800/10 hover:text-neutral-100 transition-all" />
    </button>
  )
}
