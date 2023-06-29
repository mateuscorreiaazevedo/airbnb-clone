import { lazy } from 'react'

export * from './service/listing-service'
export * from './components/listing-button-favorities'
export * from './components/listing-modal-button'

export * from './hooks/use-modal-description'

export const ListingMap = lazy(() => import('./components/listing-map'))
export const ListingsMap = lazy(() => import('./components/listings-map'))
export const ListingModal = lazy(() => import('./components/listing-modal'))
