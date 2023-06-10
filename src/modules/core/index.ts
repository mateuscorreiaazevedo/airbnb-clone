import dynamic from 'next/dynamic'

export * from './components/arrow-slider'
export * from './utils/set-notification'
export * from './contexts/auth-provider'
export * from './components/search-bar'
export * from './utils/slider-settings'
export * from './service/service'
export * from './utils/countries-helper'
export * from './hooks/use-current-location'

export const Map = dynamic(() => import('./components/map'), { ssr: false })
