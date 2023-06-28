import { ListingButtonFavorities, listingService } from '@/modules/listings'
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


  return (
    <div className='w-full flex flex-col mt-4 gap-4'>
      <h1 className='text-2xl font-semibold'>
        {room.description} | {room.locationValue}
      </h1>
      <div>
        <ListingButtonFavorities authUser={authUser} listingId={room.id!} variant='outline' />
      </div>
      <section className='flex gap-4 items-stretch justify-between'>
        <Image
          alt={room.description!}
          src={room.imageUrl!}
          width={4000}
          height={4000}
          loading='lazy'
          className='aspect-video w-3/5 rounded-lg'
        />
        <aside className='w-2/5 h-full rounded-lg border-neutral-100 border shadow-sm p-4 flex flex-col gap-2'>
          <div className='flex gap-4 items-center justify-center'>
            <h2 className='text-lg font-semibold'>
              {room.title} (Hospedado por {room.user.name})
            </h2>
            <Image
              alt={room.user.name!}
              src={room.user.image!}
              width={100}
              height={100}
              className='aspect-square rounded-full w-12'
            />
          </div>
          <div className='flex flex-col justify-normal items-center w-full gap-2'>
            <div className='flex items-center justify-between w-full'>
              Quantidade de hóspedes <span className='font-semibold w-12 flex items-center justify-center'>{room.guests}</span>
            </div>
            <div className='flex items-center justify-between w-full'>
              Quantidade de Cômodos <span className='font-semibold w-12 flex items-center justify-center'>{room.rooms}</span>
            </div>
            <div className='flex items-center justify-between w-full'>
              Quantidade de Banheiros <span className='font-semibold w-12 flex items-center justify-center'>{room.bathrooms}</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
