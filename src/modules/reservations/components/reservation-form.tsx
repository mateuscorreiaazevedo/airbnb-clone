'use client'

import { FormProvider, useForm } from 'react-hook-form'
import { formattersHelper, setNotification } from '@/modules/core'
import { useLoginModal } from '@/modules/auth'
import { ButtonPrimary } from '@/main/ui'
import React from 'react'
import dayjs from 'dayjs'

type Props = {
  authUser: UserInfo | null
  room: Listing
}

const PopoverInfo = React.lazy(() => import('./reservation-popover-info'))

export const ReservationForm: React.FC<Props> = ({ authUser, room }) => {
  const { setOpen: setLoginModal } = useLoginModal()
  const methods = useForm<ReservationForm>({
    defaultValues: {
      guests: 1,
      babies: 0
    }
  })
  const { handleSubmit, register, watch, setValue } = methods

  const totalPrice = watch('totalPrice')
  const checkIn = watch('checkIn')
  const checkOut = watch('checkOut')

  const totalPriceFormatted = React.useMemo(() => {
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

    return formattersHelper.formatMoney(totalPrice)
  }, [totalPrice, checkIn, checkOut])


  async function handleReservation(formData: ReservationForm) {
    if (authUser) {
      // setNotification('Olá', 'default')
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
              id='checkIn'
              {...register('checkIn')}
              type='date'
              className='outline-none text-zinc-600 font-semibold'
            />
          </div>
          <div className='w-px h-14 bg-zinc-300' />
          <div className='flex-1 p-2 flex flex-col'>
            <label htmlFor="checkOut" className='uppercase font-semibold text-zinc-800 text-xs'>Checkout</label>
            <input
              id='checkOut'
              {...register('checkOut')}
              type='date'
              className='outline-none text-zinc-600 font-semibold'
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
        Total (sem impostos) {totalPrice >= room.price! && <span>{totalPriceFormatted}</span>}
      </p>
    </FormProvider>
  )
}
