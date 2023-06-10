import { Heading } from '@/modules/core'
import { RentLocationMap } from './rent-location-map'
import { RentLocationSelect } from './rent-location-select'
import React from 'react'

type Props = {
  onChange: (value: CountrySelectValue) => void
  value: CountrySelectValue
}

export const LocationRent = ({ onChange, value }: Props) => {
  return (
    <>
      <Heading
        title="Onde fica sua acomodação?"
        subtitle="Seu endereço só é compartilhado com os hóspedes depois que a reserve é confirmada."
      />
      <RentLocationSelect value={value} onChange={onChange} />
      <RentLocationMap location={value} />
    </>
  )
}
