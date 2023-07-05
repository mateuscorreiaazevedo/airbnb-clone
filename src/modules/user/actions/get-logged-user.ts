import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import { prismaDb } from '@/main/config'
import { Reservation } from '@prisma/client'

type User = UserInfo & {
  reservations?: Reservation[]
}

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getLoggedUser() {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }

    const loggedUser = await prismaDb?.user.findUnique({
      where: {
        email: session?.user?.email as string
      },
      include: {
        reservations: true
      }
    })

    if (!loggedUser) {
      return null
    }

    const { password: _, ...rest } = loggedUser

    return {
      ...rest,
      createdAt: rest.createdAt.toISOString(),
      updatedAt: rest.updatedAt.toISOString(),
      emailVerified: rest.emailVerified?.toISOString() || null
    } as User
  } catch (error) {
    return null
  }
}
