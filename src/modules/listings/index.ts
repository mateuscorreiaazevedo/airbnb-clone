import { lazy } from 'react'

export * from './service/listing-service'
export * from './components/listing-button-favorities'
export const ListingsMap = lazy(()=> import('./components/listings-map'))
