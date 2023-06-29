'use client'

import { setNotification } from '@/modules/core'
import { useLoginModal } from '@/modules/auth'
import { ButtonPrimary } from '@/main/ui'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'

type Props = {
  authUser: UserInfo | null
  room: Listing
}

const PopoverInfo = React.lazy(() => import('./reservation-popover-info'))

export const ReservationForm: React.FC<Props> = ({ authUser, room }) => {
  const { setOpen: setLoginModal } = useLoginModal()
  const methods = useForm()
  const { handleSubmit, register } = methods

  async function handleReservation() {
    if (authUser) {
      setNotification('Olá', 'default')
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
        Total (sem impostos) <span>R$900</span>
      </p>
    </FormProvider>
  )
}
