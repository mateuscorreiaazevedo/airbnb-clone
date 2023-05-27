// Components
import { Header } from '@/components/header'

// Styles & Fonts
import { Nunito } from 'next/font/google'
import '../assets/styles/globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb | Mateus dev',
  description: 'Airbnb clone create with next 13. Powered by @mateuscorreiaazevedo'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={font.className}>
      <body className="w-full min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
