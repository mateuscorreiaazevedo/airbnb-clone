'use client'

import React from 'react'
import { ListingCard } from './listing-card'
import { useSearchParams } from 'next/navigation'

interface Props {
  data: Listing[]
  authUser: UserInfo | null
}

const ListingsMap: React.FC<Props> = ({ data, authUser }) => {
  const [listings, setListings] = React.useState<Listing[]>(data)
  const params = useSearchParams()
  const categoryId = params?.get('category_id')


  return (
    <section className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-2'>
      {listings.map(item => (
        <ListingCard listing={item} authUser={authUser} key={item.id} />
      ))}
    </section>
  )
}



export default ListingsMap
