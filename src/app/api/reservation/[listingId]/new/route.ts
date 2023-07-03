import { prismaDb } from "@/main/config"
import { getLoggedUser } from "@/modules/user"
import dayjs from "dayjs"
import { NextResponse } from "next/server"

interface Props {
  params: {
    listingId: string
  }
}

export async function POST(req: Request, { params }: Props) {
  const authUser = await getLoggedUser()
  const body = await req.json()
  const { listingId } = params

  const { checkIn, checkOut, guests, totalPrice, babies } = body as ReservationForm

  if (!authUser) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
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
