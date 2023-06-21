import { lazy } from 'react'

export * from './service/listing-service'

export const ListingsMap = lazy(()=> import('./components/listings-map'))
