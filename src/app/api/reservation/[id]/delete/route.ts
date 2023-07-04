import { prismaDb } from '@/main/config'
import { getLoggedUser } from '@/modules/user'
import { NextResponse } from 'next/server'

type Props = {
  params: {
    id: string
  }
}

export async function DELETE(_req: Request, { params }: Props) {
  const authUser = await getLoggedUser()
  const { id } = params

  if (!authUser) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
  }

  let reservation = await prismaDb?.reservation.findUnique({
    where: {
      id
    }
  })

  if (!reservation) {
    return NextResponse.json(
      { error: 'A reserva não foi encontrada.' },
      { status: 404 }
    )
  }

  reservation = await prismaDb?.reservation.delete({
    where: {
      id
    }
  })

  return NextResponse.json({ message: 'Reserva cancelada com sucesso.' })
}
