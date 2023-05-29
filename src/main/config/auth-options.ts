// Providers
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

// Prisma
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prismaDb } from '.'

// Utils
// import bcrypt from 'bcrypt'

// Types
import { AuthOptions } from 'next-auth'

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
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      authorize: async credentials => {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Campos inválidos.')
        }

        const user = await prismaDb?.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user || !user.password) {
          throw new Error('error')
        }

        // const verifyPassword = await bcrypt.compare(credentials.password, user.password)

        if (!verifyPassword) {
          throw new Error('Invalid Password')
        }

        return user
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/',
    error: '/'
  }
}
