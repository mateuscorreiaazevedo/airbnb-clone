// Components
import { SearchBar } from '@/modules/core'
import { UserMenu } from '@/modules/user'
import Image from 'next/image'
import Link from 'next/link'

// Utils
import { getLoggedUser } from '@/app/actions/get-logged-user'

// Contents
import { images } from '@/assets/images'

import React from 'react'

export const HeaderMain = async () => {
  const userAuth = await getLoggedUser()

  return (
    <header className="sticky top-0 w-full h-20 flex items-center border-b border-b-zinc-100">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="lg:mr-40">
          <Image src={images.airbnbLogo} alt="" className="h-8 w-[102px]" />
        </a>
        <SearchBar />
        <div className="flex gap-8">
          {userAuth
            ? (
            <Link
              href="/hosting"
              className="hidden md:flex md:text-sm lg:text-base items-center justify-center px-6 py-2 h-11 rounded-full font-semibold hover:bg-neutral-50"
            >
              Vou hospedar
            </Link>
              )
            : (
            <Link
              href="/host/homes"
              className="hidden md:flex md:text-sm lg:text-base items-center justify-center px-6 py-2 h-11 rounded-full font-semibold hover:bg-neutral-50"
            >
              Anuncie seu Airbnb
            </Link>
              )}
          <UserMenu userAuth={userAuth} />
        </div>
      </div>
    </header>
  )
}
