import { ReservationCard, reservationService } from '@/modules/reservations'
import { getLoggedUser } from '@/modules/user'
import { EmptyState } from '@/modules/core'
import React from 'react'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Suas viagens  - Airbnb | @mateuscorreiaazevedo'
}

export default async function MyReservations() {
  const authUser = await getLoggedUser()
  let reservations: Reservation[] | undefined

  if(!authUser) {
    redirect('/')
  }

  try {
    reservations = await reservationService.getAllByUser(authUser?.id as string)
  } catch (error) {
    console.error((error as any).message)
  }

  if (reservations?.length === 0 || reservations === undefined) {
    return (
      <EmptyState
        title='Nenhuma viagem programada... Ainda!'
        subtitle='Hora de tirar o pó das malas e começar a planejar a próxima aventura'
        titleButton='Começar busca'
        showReset
      />
    )
  }

  return (
    <article className='mt-10 flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>Minhas viagens</h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {reservations.map(item => (
          // @ts-expect-error Server Component
          <ReservationCard {...item} key={item.id} />
        ))}
      </section>
    </article>
  )
}
