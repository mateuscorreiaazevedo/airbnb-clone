'use client'

import { setNotification } from '@/modules/core'
import { useLoginModal } from '@/modules/auth'
import { Heart } from 'lucide-react'
import React from 'react'
import axios from 'axios'

type Props = {
  authUser: UserInfo | null
  listingId: string
}

export const ListingButtonFavorities = ({ authUser, listingId }: Props) => {
  const { setOpen: openLogin } = useLoginModal()
  const [loading, setLoading] = React.useState(false)

  async function handleFavorite() {
    setLoading(true)
    try {
      // setNotification(message, 'success')
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button className='absolute right-4 top-4' onClick={authUser ? handleFavorite : openLogin} disabled={loading}>
        <Heart className='fill-zinc-800/60 text-white active:scale-95 transition-all' />
      </button>
    </>
  )
}
