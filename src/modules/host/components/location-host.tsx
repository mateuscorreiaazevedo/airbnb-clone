import { LocationSelect } from './inputs/location-select'
import { LocationMap } from './inputs/location-map'
import { Heading } from '@/modules/core'
import React from 'react'

type Props = {
  onChange: (value: CountrySelectValue) => void
  value: CountrySelectValue
}

export const LocationHost = ({ onChange, value }: Props) => {
  return (
    <>
      <Heading
        title="Onde fica sua acomodação?"
        subtitle="Seu endereço só é compartilhado com os hóspedes depois que a reserve é confirmada."
      />
      <LocationSelect value={value} onChange={onChange} />
      <LocationMap location={value} />
    </>
  )
}
