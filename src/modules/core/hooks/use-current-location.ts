import React from 'react'

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = React.useState<number[] | undefined>()

  const setLocation = React.useCallback(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude])
    })
  }, [])

  return {
    currentLocation,
    setLocation
  }
}
