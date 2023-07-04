import { rangeDates } from '@/modules/reservations'
import { getLoggedUser } from '@/modules/user'
import { NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import dayjs from 'dayjs'

interface Props {
  params: {
    id: string
  }
}

export async function POST(req: Request, { params }: Props) {
  const authUser = await getLoggedUser()
  const body = await req.json()
  const { id: listingId } = params

  const { checkIn, checkOut, guests, totalPrice, babies } = body as ReservationForm

  if (!authUser) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
  }

  const room = await prismaDb?.listing.findUnique({
    where: {
      id: listingId
    },
    include: {
      reservations: true
    }
  })

  if (room?.userId === authUser.id) {
    return NextResponse.json(
      {
        error: 'Não é possível realizar uma reserva em seu próprio imóvel.'
      },
      {
        status: 422
      }
    )
  }

  // Verify Dates
  const existingReservation = room?.reservations.flatMap(item =>
    rangeDates(item.startDate, item.endDate)
  )
  const verifyReservation = rangeDates(checkIn.toString(), checkOut.toString())
  const hasConflit = existingReservation?.some(value =>
    verifyReservation.includes(value)
  )

  const initExistingReservation = existingReservation![0]
  const finalExistingReservation =
    existingReservation![existingReservation!.length - 1]

  if (hasConflit) {
    return NextResponse.json(
      {
        error: `As datas de ${initExistingReservation} à ${finalExistingReservation} estão reservadas.`
      },
      {
        status: 422
      }
    )
  }

  const newReservation = await prismaDb?.reservation.create({
    data: {
      listingId,
      userId: authUser.id,
      startDate: dayjs(checkIn).toDate(),
      endDate: dayjs(checkOut).toDate(),
      guests,
      babies: babies as number,
      totalPrice
    }
  })

  if (!newReservation) {
    return NextResponse.json(
      { error: 'Não foi possível fazer a reserva.' },
      { status: 422 }
    )
  }

  return NextResponse.json({ message: 'Reserva realizada com sucesso' })
}
