'use client'

import { countriesHelper } from '@/modules/core'
import dynamic from 'next/dynamic'
import React from 'react'

type Props = {
  value: string
}

const ListingMap = ({ value }: Props) => {
  const [localtion, setLocation] = React.useState<Country | undefined>()

  React.useEffect(() => {
    (() => {
      try {
        const response = countriesHelper.getByValue(value)
        setLocation(response)
      } catch (error) {

      }
    })()
  }, [])

  const Map = React.useMemo(() => {
    return dynamic(() => import('@/modules/core/components/map'), { ssr: false })
  }, [value])

  return (
    <Map
      center={localtion?.latlng}
    />
  )
}

export default ListingMap
