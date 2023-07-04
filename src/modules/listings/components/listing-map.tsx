'use client'

import { countriesHelper } from '@/modules/core'
import React, { lazy } from 'react'

type Props = {
  value: string
}

const ListingMap = ({ value }: Props) => {
  const [localtion, setLocation] = React.useState<Country | undefined>()

  React.useEffect(() => {
    ;(() => {
      try {
        const response = countriesHelper.getByValue(value)
        setLocation(response)
      } catch (error) {}
    })()
  }, [])

  const Map = React.useMemo(() => {
    return lazy(() => import('@/modules/core/components/map'))
  }, [value])

  return (
    <React.Suspense
      fallback={
        <span className="animate-pulse bg-gray-200 rounded-lg w-full h-[45vh]"></span>
      }
    >
      <Map center={localtion?.latlng} />
    </React.Suspense>
  )
}

export default ListingMap
