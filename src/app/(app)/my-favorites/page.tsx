import { FavoriteCard, getLoggedUser } from '@/modules/user'
import React from 'react'

export default async function MyFavorites() {
  const authUser = await getLoggedUser()

  return (
    <article
      className='mt-10 fex flex-col gap-2'
    >

      <h1 className='text-4xl font-semibold'>
        Meus favoritos
      </h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {authUser?.favoriteIds?.map(id => (
          // @ts-expect-error Server Component
          <FavoriteCard favoriteId={id} key={id} authUser={authUser} />
        ))}
      </section>
    </article>
  )
}
