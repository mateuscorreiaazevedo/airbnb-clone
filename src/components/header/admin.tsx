// Components
import Image from 'next/image'
import Link from 'next/link'

// Utils
import { getLoggedUser } from '@/app/actions/get-logged-user'

// Contents
import { images } from '@/assets/images'

import React from 'react'
import { UserMenu } from '@/modules/user'

export const HeaderAdmin = async () => {
  const userAuth = await getLoggedUser()

  return (
    <header className="container sticky top-0 h-20 border-b border-b-zinc-100 flex items-center justify-between">
      <Link href="/hosting" className="lg:mr-40">
        <Image src={images.airbnbBrand} alt="Airbnb Brand" className="w-8 aspect-square" />
      </Link>
      <UserMenu userAuth={userAuth} onlyAvatar />
    </header>
  )
}
