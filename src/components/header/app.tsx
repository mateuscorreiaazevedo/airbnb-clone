import { UserMenu, getLoggedUser } from '@/modules/user'
import { SearchBar } from '@/modules/core'
import { images } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeaderApp = async () => {
  const userAuth = await getLoggedUser()

  return (
    <header className="container sticky top-0 w-full h-20 items-center justify-between flex border-b border-b-zinc-100 bg-white">
      <Link href="/" className="lg:mr-40">
        <Image src={images.airbnbLogo} alt="" className="w-[102px] aspect-video" />
      </Link>
      <SearchBar />
      <div className="flex gap-8">
        {userAuth ? (
          <Link
            href="/hosting"
            className="hidden md:flex md:text-sm lg:text-base items-center justify-center px-6 py-2 h-11 rounded-full font-semibold hover:bg-neutral-50"
          >
            Vou hospedar
          </Link>
        ) : (
          <Link
            href="/host/homes"
            className="hidden md:flex md:text-sm lg:text-base items-center justify-center px-6 py-2 h-11 rounded-full font-semibold hover:bg-neutral-50"
          >
            Anuncie seu Airbnb
          </Link>
        )}
        <UserMenu userAuth={userAuth} />
      </div>
    </header>
  )
}
