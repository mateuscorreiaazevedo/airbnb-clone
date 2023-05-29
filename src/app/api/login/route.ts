import { z } from 'zod'
import bcrypt from 'bcrypt'
import { prismaDb } from '@/main/config'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
  const body = await req.json()

  const bodySchema = z.object({
    email: z.string(),
    password: z.string()
  })

  const { email, password } = bodySchema.parse(body)

  // Validations
  const verifyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!email.length) {
    return NextResponse.json({ error: 'Insira um endereço de e-mail.' }, { status: 422 })
  }
  if (!verifyEmail.test(email)) {
    return NextResponse.json({ error: 'Endereço de e-mail inválido.' }, { status: 422 })
  }
  if (!password.length) {
    return NextResponse.json({ error: 'Insira uma senha.' }, { status: 422 })
  }
  // End - Validations

  const user = await prismaDb?.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return NextResponse.json({ error: 'Usuário não econtrado' }, { status: 404 })
  }

  const verifyPassword = await bcrypt.compare(password, user.password as string)

  if (!verifyPassword) {
    return NextResponse.json({ error: 'Senha incorreta.' }, { status: 422 })
  }

  const { password: _, ...rest } = user

  return NextResponse.json({
    data: rest
  })
}
