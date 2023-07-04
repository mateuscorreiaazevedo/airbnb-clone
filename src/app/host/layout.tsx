// Components
import Image from 'next/image'
import Link from 'next/link'

import { HostModalsButton } from '@/components/header'
import { getLoggedUser } from '@/modules/user'
import { redirect } from 'next/navigation'
import { images } from '@/assets/images'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Hospede na sua casa com o Airbnb'
}

export default async function HostLayout({
  children
}: {
  children: React.ReactNode
}) {
  const userAuth = await getLoggedUser()

  if (userAuth) {
    redirect('/hosting')
  }

  return (
    <>
      <header className="container w-full flex items-center justify-between h-20 sticky top-0">
        <Link href="/">
          <Image
            src={images.airbnbBrand}
            alt="Airbnb brand"
            className="w-[102px] h-8"
          />
        </Link>
        <div className="flex gap-8 items-center">
          <p className="font-semibold text-base w-fit">
            Pronto para anunciar no Airbnb?
          </p>
          <HostModalsButton />
        </div>
      </header>
      <main className="container w-full h-full">{children}</main>
    </>
  )
}
