import { z } from 'zod'
import bcrypt from 'bcrypt'
import { prismaDb } from '@/main/config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const bodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string()
  })

  const { email, name, password, confirmPassword } = bodySchema.parse(body)

  // Validations
  const verifyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const verifyCapitalLetter = /^(?=.*[A-Z]).+$/
  const verifySpecialCaracter = /^(?=.*[!@#$%^&*()_\-+=<>?.]).+$/
  const verifyNumber = /^(?=.*[0-9]).+$/

  if (!email.length) {
    return NextResponse.json(
      { error: 'Insira um endereço de e-mail.' },
      { status: 422 }
    )
  }
  if (!verifyEmail.test(email)) {
    return NextResponse.json(
      { error: 'Endereço de e-mail inválido.' },
      { status: 422 }
    )
  }
  if (!name.length) {
    return NextResponse.json({ error: 'Insira um nome.' }, { status: 422 })
  }
  if (!password.length) {
    return NextResponse.json({ error: 'Insira uma senha.' }, { status: 422 })
  }
  if (!confirmPassword.length) {
    return NextResponse.json({ error: 'Confirme sua senha.' }, { status: 422 })
  }
  if (!verifyCapitalLetter.test(password)) {
    return NextResponse.json(
      { error: 'A senha deve conter no mínimo uma letra maiúscula.' },
      { status: 422 }
    )
  }
  if (!verifySpecialCaracter.test(password)) {
    return NextResponse.json(
      { error: 'A senha deve conter no mínimo um caractere especial.' },
      { status: 422 }
    )
  }
  if (!verifyNumber.test(password)) {
    return NextResponse.json(
      { error: 'A senha deve conter no mínimo um número.' },
      { status: 422 }
    )
  }
  if (password.length < 8) {
    return NextResponse.json(
      { error: 'A senha deve conter no mínimo 8 caracteres.' },
      { status: 422 }
    )
  }
  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: 'As senhas devem ser iguais.' },
      { status: 422 }
    )
  }
  // End - Validations

  // Encrypt password
  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)

  const user = await prismaDb?.user.findUnique({
    where: {
      email
    }
  })

  if (user) {
    return NextResponse.json(
      { error: 'Endereço de e-mail já cadastrado' },
      { status: 422 }
    )
  }

  await prismaDb?.user.create({
    data: {
      email,
      name,
      password: hashPassword
    }
  })

  return NextResponse.json(
    { message: 'Usário cadastrado com sucesso!' },
    { status: 201 }
  )
}
