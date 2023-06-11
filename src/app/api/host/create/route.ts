import { getLoggedUser } from '@/modules/user'
import { NextResponse } from 'next/server'
import { prismaDb } from '@/main/config'
import z from 'zod'

export async function POST (req: Request) {
  const body = await req.json()

  const bodySchema = z.object({
    bathrooms: z.number(),
    categoryId: z.number(),
    guests: z.number(),
    rooms: z.number(),
    price: z.string(),
    description: z.string(),
    title: z.string(),
    imageUrl: z.string(),
    locationValue: z.string()
  })

  const authUser = await getLoggedUser()

  if (!authUser) {
    return NextResponse.json({ error: 'Usuário não autorizado.' }, { status: 401 })
  }

  const value = bodySchema.parse(body)
  if (!value.categoryId) {
    return NextResponse.json(
      { error: 'Indique a categoria da sua propriedade.' },
      { status: 422 }
    )
  }
  if (!value.locationValue) {
    return NextResponse.json(
      { error: 'Indique a localização da sua propriedade.' },
      { status: 422 }
    )
  }
  if (!value.imageUrl) {
    return NextResponse.json(
      { error: 'Insira uma imagem da sua propriedade.' },
      { status: 422 }
    )
  }
  if (!value.title) {
    return NextResponse.json(
      { error: 'Insira um título para sua propriedade.' },
      { status: 422 }
    )
  }
  if (!value.description) {
    return NextResponse.json(
      { error: 'Insira uma descrição para sua propriedade.' },
      { status: 422 }
    )
  }
  if (!value.price) {
    return NextResponse.json(
      { error: 'Indique o preço de hospedagem por noite da sua propriedade.' },
      { status: 422 }
    )
  }

  const hosting = await prismaDb?.listing.create({
    data: {
      bathrooms: value.bathrooms,
      categoryId: value.categoryId,
      description: value.description,
      guests: value.guests,
      locationValue: value.locationValue,
      imageUrl: value.imageUrl,
      price: parseInt(value.price, 10),
      rooms: value.rooms,
      title: value.title,
      userId: authUser.id
    }
  })

  if (!hosting) {
    return NextResponse.json(
      { error: 'Houve um erro na publicação dessa hospedagem.' },
      { status: 422 }
    )
  }

  return NextResponse.json(
    { message: 'Sua hospedagem foi publicada com sucesso!' },
    { status: 201 }
  )
}
