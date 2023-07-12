'use client'

import { useCurrentLocation } from '@/modules/core'
import { ButtonPrimary } from '@/main/ui'
import { MapPin } from 'lucide-react'
import React from 'react'
import dynamic from 'next/dynamic'

type Props = {
  location: CountrySelectValue
}

export const LocationMap: React.FC<Props> = ({ location }) => {
  const { currentLocation, setLocation } = useCurrentLocation()

  const Map = React.useMemo(
    () => dynamic(() => import('@/modules/core/components/map'), { ssr: true }),
    [location, currentLocation]
  )

  return (
    <React.Suspense
      fallback={
        <span className="animate-pulse bg-gray-200 rounded-lg w-full h-[45vh]"></span>
      }
    >
      <div className=" w-full flex flex-col gap-4">
        {!location && (
          <ButtonPrimary
            type="button"
            onClick={setLocation}
            style={{ width: '100%' }}
          >
            <MapPin className="w-8 h-8 mr-4" />
            Usar minha localização atual
          </ButtonPrimary>
        )}
        <Map center={location?.latlng ?? currentLocation} />
      </div>
    </React.Suspense>
  )
}
