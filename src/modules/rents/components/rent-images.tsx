import { RentImageUpload } from './rent-image-upload'
import { Heading } from '@/modules/core'
import React from 'react'

export const RentImages = () => {
  return (
    <>
      <Heading
        title='Adicione uma foto do seu espaço.'
        subtitle='Mostre aos convidados como é o seu lugar!'
      />
      <RentImageUpload />
    </>
  )
}
