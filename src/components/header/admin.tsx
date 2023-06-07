import { UserMenu, getLoggedUser } from '@/modules/user'
import { images } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { redirect } from 'next/navigation'

export const HeaderAdmin = async () => {
  const userAuth = await getLoggedUser()

  if (!userAuth) {
    redirect('/')
  }

  return (
    <header className="container sticky top-0 h-20 border-b border-b-zinc-100 flex items-center justify-between">
      <Link href="/hosting" className="lg:mr-40">
        <Image src={images.airbnbBrand} alt="Airbnb Brand" className="w-8 aspect-square" />
      </Link>
      <UserMenu userAuth={userAuth} onlyAvatar />
    </header>
  )
}
