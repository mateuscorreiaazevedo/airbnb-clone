'use client'

import { Button } from '@/main/ui'
import { useCurrentLocation } from '@/modules/core'
import { MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'

type Props = {
  location: CountrySelectValue
}

export const RentLocationMap: React.FC<Props> = ({ location }) => {
  const { currentLocation, setLocation } = useCurrentLocation()

  const Map = React.useMemo(
    () => dynamic(() => import('@/modules/core/components/map'), { ssr: false }),
    [location, currentLocation]
  )

  return (
    <div className="animate-slide-up w-full flex flex-col gap-4">
      {!location && (
        <Button onClick={setLocation} style={{ width: '100%' }}>
          <MapPin className="w-8 h-8 mr-4" />
          Usar minha localização atual
        </Button>
      )}
      <Map center={location?.latlng ?? currentLocation} />
    </div>
  )
}
