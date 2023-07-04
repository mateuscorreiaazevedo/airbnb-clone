import { prismaDb } from '@/main/config'
import { getLoggedUser } from '@/modules/user'
import { NextResponse } from 'next/server'

interface Props {
  params: {
    listingId: string
  }
}

export async function PUT(req: Request, { params }: Props) {
  const authUser = await getLoggedUser()
  const { listingId } = params

  if (!authUser) {
    return NextResponse.json({ error: 'Usuário não autenticado.' }, { status: 401 })
  }

  const favoriteIds = [...(authUser.favoriteIds || [])]

  if (favoriteIds.includes(listingId)) {
    const updateFavorites = favoriteIds.filter(id => id !== listingId)

    await prismaDb?.user.update({
      where: {
        id: authUser.id
      },
      data: {
        favoriteIds: updateFavorites
      }
    })

    return NextResponse.json({ message: 'Removido dos seus favoritos.' })
  } else {
    favoriteIds.push(listingId)

    await prismaDb?.user.update({
      where: {
        id: authUser.id
      },
      data: {
        favoriteIds
      }
    })

    return NextResponse.json({ message: 'Adicionado aos seus favoritos.' })
  }
}
