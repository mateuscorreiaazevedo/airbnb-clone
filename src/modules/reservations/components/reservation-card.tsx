import { countriesHelper, formattersHelper } from '@/modules/core'
import { listingService } from '@/modules/listings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CancelReservationButton } from './cancel-reservation-button'
import dayjs from 'dayjs'
import { DeleteReservationButton } from './delete-reservation-button'

export const ReservationCard = async (props: Reservation) => {
  const listing = await listingService.getyById(props.listingId!)
  const location = countriesHelper.getByValue(listing.locationValue!)

  const checkIn = formattersHelper.formatDate.extend(props.startDate)
  const checkOut = formattersHelper.formatDate.extend(props.endDate)

  return (
    <div className="relative flex flex-col transition-all items-center w-fit h-fit p-2 rounded-lg justify-center gap-2">
      <Link
        href={`/rooms/${listing.id}`}
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
            <span className="text-sm mr-1">Reserva em </span>
            <strong className="font-semibold text-sm">{listing.title}</strong>
          </section>
          <section className="flex flex-col text-sm">
            <p className="text-neutral-400 font-light">
              {location?.label},{' '}
              <span className="font-semibold">{location?.region}</span>
            </p>
            <div className="flex gap-2 text-neutral-400 justify-between font-semibold uppercase">
              <span>check-in</span>
              <span>check-out</span>
            </div>
            <div className="flex gap-2 text-neutral-800 justify-between">
              <span>{checkIn}</span>
              <span>{checkOut}</span>
            </div>
            <span className="text-neutral-400">
              {props.guests} Hóspede(s){' '}
              {props.babies! > 0 && <>- {props.babies} bebê(s)</>}
            </span>
          </section>
          <p className="font-semibold">
            {formattersHelper.formatMoney(props.totalPrice)}{' '}
            <span className="text-neutral-600 text-sm">(Valor total)</span>
          </p>
        </article>
      </Link>
      {dayjs(props.startDate).isBefore(dayjs()) &&
      dayjs(props.endDate).isAfter(dayjs()) ? (
        <p className="font-semibold text-neutral-600 text-center bg-neutral-100 w-full rounded-lg py-1">
          Reserva em andamento
        </p>
      ) : (
        <CancelReservationButton reservationId={props.id} />
      )}
      {dayjs().isAfter(props.endDate) && (
        <DeleteReservationButton reservationId={props.id} />
      )}
    </div>
  )
}
