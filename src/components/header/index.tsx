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

// Next-Auth

export const Header = async () => {
  const loggedUser = await getLoggedUser()
  return (
    <header className="sticky top-0 w-full h-20 flex items-center border-b border-b-zinc-100">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={images.airbnbLogo} alt="" className="h-8 w-[102px] mr-40" />
        </Link>
        <SearchBar />
        <div className="flex gap-8">
          <Link
            href="/"
            className="px-6 py-2 h-11 rounded-full font-semibold hover:bg-neutral-50"
          >
            Anuncie seu espaço no Airbnb
          </Link>
           <UserMenu isLogged={!!loggedUser} />
        </div>
      </nav>
    </header>
  )
}
