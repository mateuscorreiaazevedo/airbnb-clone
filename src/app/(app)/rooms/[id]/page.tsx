import { images } from '@/assets/images'
import { countriesHelper, formattersHelper } from '@/modules/core'
import { categoriesMocks } from '@/modules/filters'
import {
  ListingButtonFavorities,
  ListingMap,
  ListingModalButton,
  listingService
} from '@/modules/listings'
import { ReservationForm } from '@/modules/reservations'
import { getLoggedUser } from '@/modules/user'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  params: { id: string }
}


export async function generateMetadata({ params }: Props) {
  const { id } = params
  const room = await listingService.getyById(id)


  return {
    title: `${room.title} - Airbnb | @mateuscorreiaazevedo`
  }
}

export default async function Room({ params }: Props) {
  let room: (Listing & { user: UserInfo })
  const authUser = await getLoggedUser()

  try {
    room = await listingService.getyById(params.id)
  } catch (error) {
    redirect('/')
  }
  const location = countriesHelper.getByValue(room.locationValue!)
  const category = categoriesMocks.find(item => item.id === room.categoryId)

  return (
    <article className='w-full flex flex-col mt-4 gap-4'>
      {/* Title and location Value */}
      <h1 className='text-2xl font-semibold'>
        {room.title} | {room.locationValue}
      </h1>
      {/* Location and favorite button */}
      <div className='flex items-center justify-between w-full'>
        <p className='text-neutral-400'>
          {location?.region}, <span className='font-semibold'>{location?.label}</span>
        </p>
        <ListingButtonFavorities authUser={authUser} listingId={room.id!} variant='outline' />
      </div>
      {/* Image room & aside with info and reservation form */}
      <section className='flex flex-col lg:flex-row gap-4 items-stretch justify-between'>
        <Image
          alt={room.description!}
          src={room.imageUrl!}
          width={4000}
          height={4000}
          loading='lazy'
          className='aspect-video lg:w-3/5 rounded-lg shadow'
        />
        <aside className='w-full lg:w-2/5 h-full rounded-lg border-neutral-100 border shadow-sm p-4 flex flex-col gap-4'>
          <section className='flex flex-col gap-2 border-b border-b-neutral-100 py-2'>
            <div className='flex gap-4 items-center justify-center'>
              <h2 className='text-lg font-semibold'>
                {category?.label} (Hospedado por {room.user.name})
              </h2>
              <Image
                alt={room.user.name!}
                src={room.user.image ?? images.avatarPlaceholder}
                width={100}
                height={100}
                className='aspect-square rounded-full w-12'
              />
            </div>
            <div className='flex gap-2 text-xs text-neutral-400'>
              <span>{room.guests} Hóspede(s)</span>
              <span>{room.rooms} Cômodo(s)</span>
              <span>{room.bathrooms} Banheiro(s)</span>
            </div>
          </section>
          <section className='flex flex-col items-stretch justify-normal gap-2'>
            <div>
              <strong className='text-xl'>
                {formattersHelper.formatMoney(room.price!)}
              </strong>
              <span className='ml-2'>
                noite
              </span>
            </div>
            <ReservationForm authUser={authUser} room={room} />
          </section>
        </aside>
      </section>
      {/* Description and Map */}
      <section className='flex flex-col md:flex-row items-stretch justify-between gap-4'>
        <section className='w-full flex flex-col items-stretch justify-normal gap-4 mb-10'>
          <h3 className='text-2xl font-bold'>Descrição</h3>
          <p>
            {room.description}
          </p>
          <ListingModalButton room={room} />
        </section>
        <section className='w-full flex flex-col items-stretch justify-normal gap-4 mb-10'>
          <h3 className='text-2xl font-bold'>Localização</h3>
          <ListingMap value={room.locationValue!} />
        </section>
      </section>
    </article>
  )
}
