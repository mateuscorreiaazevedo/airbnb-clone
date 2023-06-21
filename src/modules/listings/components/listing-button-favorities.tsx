'use client'

import { Login, useLoginModal } from '@/modules/auth'
import { Heart } from 'lucide-react'
import React from 'react'

type Props = {
  authUser: UserInfo | null
}

export const ListingButtonFavorities = ({ authUser }: Props) => {
  const { setOpen: openLogin } = useLoginModal()

  function handleFavoriteRoom() {
    if (!authUser) {
      openLogin()
      return
    }

    console.log('favoritado')
  }

  return (
    <>
      <button className='absolute right-4 top-4' onClick={handleFavoriteRoom}>
        <Heart className='fill-zinc-800/60 text-white active:scale-95 transition-all' />
      </button>
    </>
  )
}
