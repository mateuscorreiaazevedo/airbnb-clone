import { EmptyState } from '@/modules/core'
import { FavoriteCard, getLoggedUser } from '@/modules/user'
import React from 'react'

export default async function MyFavorites() {
  const authUser = await getLoggedUser()

  if (authUser?.favoriteIds?.length === 0) {
    return (
      <EmptyState
        title="Você ainda não possui favoritos!"
        subtitle="Não se preocupe, com certeza você achar um lugar que irá amar!"
        titleButton="Começar busca"
        showReset
      />
    )
  }

  return (
    <article className="mt-10 fex flex-col gap-2">
      <h1 className="text-4xl font-semibold">Meus favoritos</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {authUser?.favoriteIds?.map(id => (
          // @ts-expect-error Server Component
          <FavoriteCard favoriteId={id} key={id} authUser={authUser} />
        ))}
      </section>
    </article>
  )
}
