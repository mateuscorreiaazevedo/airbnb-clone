// Styles & Fonts
import { Nunito } from 'next/font/google'
import '../assets/styles/globals.css'

import { ListingModal } from '@/modules/listings'
import { Login, Register } from '@/modules/auth'
import { AuthProvider } from '@/modules/core'
import { Toaster } from 'react-hot-toast'
import dayjs from 'dayjs'

const font = Nunito({ subsets: ['latin'] })
dayjs.locale(require('dayjs/locale/pt-br'))

export const metadata = {
  title: 'Airbnb | @mateuscorreiaazevedo',
  description: 'Airbnb clone create with next 13. Powered by @mateuscorreiaazevedo'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {



  return (
    <html lang="pt-br" className={font.className}>
      <body className="w-full min-h-screen">
        <AuthProvider>
            <Toaster
              toastOptions={{
                position: 'top-center',
                className: 'font-bold px-4 py-2'
              }}
            />
            <Login />
            <Register />
            <ListingModal />
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}
