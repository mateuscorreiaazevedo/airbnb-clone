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
      <h1 className="animate-slide-up text-3xl font-bold">Onde fica sua acomodação?</h1>
      <p className="animate-slide-up text-2xl text-zinc-400 font-extralight">
        Seu endereço só é compartilhado com os hóspedes depois que a reserva é confirmada.
      </p>
      <RentLocationSelect value={value} onChange={onChange} />
      <RentLocationMap location={value} />
    </>
  )
}
