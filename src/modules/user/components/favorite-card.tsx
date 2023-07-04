import { countriesHelper, formattersHelper } from '@/modules/core'
import { ListingButtonFavorities, listingService } from '@/modules/listings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  favoriteId: string
  authUser: UserInfo | null
}

export const FavoriteCard = async ({ favoriteId, authUser }: Props) => {
  const listing = await listingService.getyById(favoriteId)
  const location = countriesHelper.getByValue(listing.locationValue!)

  return (
    <div className="relative flex flex-col transition-all items-center w-fit h-fit p-2 rounded-lg justify-center gap-2">
      <Link
        href={`/rooms/${listing.id}`}
        target="_blank"
        className="flex flex-col items-center justify-center gap-2"
      >
        <Image
          alt={listing.title as string}
          src={listing.imageUrl as string}
          width={300}
          height={300}
          className="rounded-lg aspect-square w-64 object-cover"
        />
        <article className="w-full flex flex-col">
          <section className="inline-flex">
            <strong className="font-semibold text-sm">{listing.title}</strong>
          </section>
          <p className="text-neutral-400 font-light">
            {location?.label},{' '}
            <span className="font-semibold">{location?.region}</span>
          </p>
          <p className="font-semibold">
            {formattersHelper.formatMoney(listing.price!)}{' '}
            <span className="text-neutral-600 text-sm">noite</span>
          </p>
        </article>
      </Link>
      <ListingButtonFavorities listingId={listing.id!} authUser={authUser} />
    </div>
  )
}
