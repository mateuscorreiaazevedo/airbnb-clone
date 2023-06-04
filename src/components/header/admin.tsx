// Components
import Image from 'next/image'
import Link from 'next/link'

// Utils
// import { getLoggedUser } from '@/app/actions/get-logged-user'

// Contents
import { images } from '@/assets/images'

import React from 'react'

export const HeaderAdmin = async () => {
  return (
    <header className="sticky top-0 w-full h-20 flex items-center border-b border-b-zinc-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/hosting" className="lg:mr-40">
          <Image src={images.airbnbBrand} alt="" className="h-8 w-[102px]" />
        </Link>
      </div>
    </header>
  )
}
