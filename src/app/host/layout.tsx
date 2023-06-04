// Components
import { Login, Register } from '@/modules/auth'
import Image from 'next/image'
import Link from 'next/link'

// Contents
import { images } from '@/assets/images'
import { Plus } from 'lucide-react'

// React
import React from 'react'
import { Metadata } from 'next'
import { getLoggedUser } from '../actions/get-logged-user'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Hospede na sua casa com o Airbnb'
}

export default async function HostLayout ({ children }: {children: React.ReactNode}) {
  const userAuth = await getLoggedUser()

  if (userAuth) {
    redirect('/hosting')
  }

  return (
    <>
      <header className='container w-full flex items-center justify-between h-20 sticky top-0'>
        <Link href='/'>
          <Image src={images.airbnbBrand} alt='Airbnb brand' className='w-[102px] h-8' />
        </Link>
        <div className="flex gap-8 items-center">
            <p className="font-semibold text-base w-fit">Pronto para anunciar no Airbnb?</p>
            <Login
              button={
                <button className="w-fit px-6 text-lg font-semibold py-3 flex items-center justify-center gap-2 text-white bg-gradient-to-l from-rose-500 to-pink-500 rounded-lg">
                  <Plus size={28} /> Anúnicio Fácil Airbnb
                </button>
              }
            />
            <Register button={<> </>} />
          </div>
      </header>
      <main className="container w-full h-full">
        {children}
      </main>
    </>
  )
}
