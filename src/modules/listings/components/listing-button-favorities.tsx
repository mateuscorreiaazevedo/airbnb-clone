'use client'

import { favoriteService } from '../service/favorite-service'
import { setNotification } from '@/modules/core'
import { useLoginModal } from '@/modules/auth'
import { Heart } from 'lucide-react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  authUser: UserInfo | null
  listingId: string
}

export const ListingButtonFavorities = ({ authUser, listingId }: Props) => {
  const [loading, setLoading] = React.useState(false)
  const { setOpen: openLogin } = useLoginModal()
  const router = useRouter()

  const hasFavorited = React.useMemo(() => {
    const list = authUser?.favoriteIds || []

    return list.includes(listingId)
  }, [authUser, listingId])

  const toggleFavorite = React.useCallback(async () => {
    setLoading(true)
    try {
      const message = await favoriteService.toggle(listingId)
      setNotification(message, 'success')
      router.refresh()
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }

  }, [])



  return (
    <>
      <button className='absolute right-4 top-4' onClick={authUser ? toggleFavorite : openLogin} disabled={loading}>
        <Heart className={`${hasFavorited ? 'fill-rose-500 text-rose-500' : 'fill-zinc-800/60 text-white'} active:scale-95 transition-all`} />
      </button>
    </>
  )
}
