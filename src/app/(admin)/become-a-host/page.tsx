import { CreateRent } from '@/modules/listings'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Crie o anúncio de sua propriedade - Airbnb | @mateuscorreiaazevedo'
}

export default function BecomeAHost () {
  return (
    <CreateRent />
  )
}
