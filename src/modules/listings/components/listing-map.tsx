'use client'

import React from 'react'

type Props = {
  location?: Country
}

const ListingMap = ({ location }: Props) => {
  const Map = React.useMemo(() => {
    return React.lazy(() => import('@/modules/core/components/map'))
  }, [location])

  return (
    <React.Suspense
      fallback={
        <span className="animate-pulse bg-gray-200 rounded-lg w-full h-[45vh]"></span>
      }
    >
      <Map center={location!.latlng} />
    </React.Suspense>
  )
}

export default ListingMap
