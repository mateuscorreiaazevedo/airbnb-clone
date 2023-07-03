'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { formattersHelper, setNotification } from '@/modules/core'
import { useLoginModal } from '@/modules/auth'
import { ButtonPrimary } from '@/main/ui'
import React from 'react'
import dayjs from 'dayjs'
import { reservationService } from '../service/reservation-service'
import { useRouter } from 'next/navigation'

type Props = {
  authUser: UserInfo | null
  room: Listing
}

const PopoverInfo = React.lazy(() => import('./reservation-popover-info'))

export const ReservationForm: React.FC<Props> = ({ authUser, room }) => {
  const { setOpen: setLoginModal } = useLoginModal()
  const router = useRouter()
  const methods = useForm<ReservationForm>({
    defaultValues: {
      guests: 1,
      babies: 0,
      checkIn: dayjs().toISOString().split('T')[0],
      checkOut: dayjs().add(1, 'day').toISOString().split('T')[0]
    }
  })
  const { handleSubmit, register, watch, setValue } = methods

  const totalPrice = watch('totalPrice')
  const checkIn = watch('checkIn')
  const checkOut = watch('checkOut')

  const formattedPrice = formattersHelper.formatMoney(totalPrice)

  React.useEffect(() => {
    const startDate = dayjs(checkIn)
    const endDate = dayjs(checkOut)

    const rangeDate = endDate.diff(startDate, 'day')

    if (rangeDate < 0) {
      setNotification('A data de check-out não pode ser anterior a data de check-in', 'error')
      return
    }
    if (rangeDate === 0) {
      return
    }

    const resultOfRangeDateAndPrice = rangeDate * room.price!
    setValue('totalPrice', resultOfRangeDateAndPrice)

  }, [totalPrice, checkIn, checkOut])


  async function handleReservation(formData: ReservationForm) {
    if (authUser) {
      try {
        const message = await reservationService.newReservation(formData, room.id!)
        setNotification(message, 'success')
        router.refresh()
        router.push('/')
      } catch (error) {
        setNotification((error as any).message, 'error')
      }
      return
    }

    setLoginModal()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleReservation)} className='flex flex-col'>
        <fieldset className='flex h-14 items-center justify-between gap-4 border border-b-transparent border-zinc-300 rounded-t-lg'>
          <div className='flex-1 p-2 flex flex-col'>
            <label htmlFor="checkIn" className='uppercase font-semibold text-zinc-800 text-xs'>Check-In</label>
            <input
              type='date'
              id='checkIn'
              {...register('checkIn')}
              defaultValue={checkIn.toString()}
              min={dayjs().toISOString().split('T')[0]}
              className='outline-none text-zinc-600 font-semibold'
            />
          </div>
          <div className='w-px h-14 bg-zinc-300' />
          <div className='flex-1 p-2 flex flex-col'>
            <label htmlFor="checkOut" className='uppercase font-semibold text-zinc-800 text-xs'>Checkout</label>
            <input
              type='date'
              id='checkOut'
              {...register('checkOut')}
              className='outline-none text-zinc-600 font-semibold'
              min={dayjs(checkIn).add(1, 'day').toISOString().split('T')[0]}
              defaultValue={dayjs(checkIn).add(1, 'day').toISOString().split('T')[0]}
            />
          </div>
        </fieldset>
        <fieldset className='border mb-2 h-14 border-zinc-300 rounded-b-lg'>
          <PopoverInfo maxGuests={room.guests} />
        </fieldset>
        <ButtonPrimary type='submit' style={{
          width: '100%'
        }}>
          Reservar
        </ButtonPrimary>
      </form>
      <p className='flex items-center pt-2 justify-between font-bold'>
        Total (sem impostos) {totalPrice >= room.price! && <span>{formattedPrice}</span>}
      </p>
    </FormProvider>
  )
}
