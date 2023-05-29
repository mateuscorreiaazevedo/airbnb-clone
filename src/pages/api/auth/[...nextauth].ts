
// Providers
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

// Prisma
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prismaDb } from '@/main/config'

// Utils

// Types
import NextAuth, { AuthOptions } from 'next-auth'
import { compare } from 'bcrypt'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaDb!),
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Senha', type: 'password' }
      },
      authorize: async credentials => {
        const verifyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        const email = credentials?.email as string
        const password = credentials?.password as string

        if (!email.length) {
          throw new Error('Insira um endereço de e-mail.')
        }
        if (!verifyEmail.test(email)) {
          throw new Error('Endereço de e-mail inválido.')
        }
        if (!password.length) {
          throw new Error('Insira uma senha.')
        }
        // End - Validations

        const user = await prismaDb?.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          throw new Error('Usuário não econtrado')
        }

        const verifyPassword = await compare(password, user.password as string)

        if (!verifyPassword) {
          throw new Error('Senha incorreta.')
        }

        const { password: _, ...rest } = user

        return rest
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/',
    error: '/'
  }
}

export default NextAuth(authOptions)
