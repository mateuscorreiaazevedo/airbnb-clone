import { prismaDb } from "@/main/config"
import { rangeDates } from "@/modules/reservations"
import { getLoggedUser } from "@/modules/user"
import dayjs from "dayjs"
import { NextResponse } from "next/server"
import { root } from "postcss"

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
  const existingReservationVerify = room?.reservations.map(item => {
    const startDate = item.startDate.toISOString().split('T')[0]
    const endDate = item.endDate.toISOString().split('T')[0]

    return rangeDates(startDate, endDate)
  })[0]
  const newReservationVerify = rangeDates(checkIn.toString(), checkOut.toString())

  function conflitDates() {


    const compareDates = existingReservationVerify?.some(value => {
      return newReservationVerify.includes(value)
    })

    return compareDates
  }


  if (conflitDates()) {
    return NextResponse.json(
      {
        error: `As datas de ${existingReservationVerify![0]} à ${existingReservationVerify![existingReservationVerify!.length - 1]} estão reservadas.`
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
      totalPrice,
    }
  })

  if (!newReservation) {
    return NextResponse.json({ error: 'Não foi possível fazer a reserva.' }, { status: 422 })
  }

  return NextResponse.json({ message: 'Reserva realizada com sucesso' })
}
