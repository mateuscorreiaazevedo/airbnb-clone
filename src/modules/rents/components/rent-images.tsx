import { RentImageUpload } from './rent-image-upload'
import { Heading } from '@/modules/core'
import React from 'react'

type Props = {
  handleUploadImage: (value: string) => void
  imageUrl: string
}

export const RentImages: React.FC<Props> = ({ handleUploadImage, imageUrl }) => {
  return (
    <>
      <Heading
        title='Adicione uma foto do seu espaço.'
        subtitle='Mostre aos convidados como é o seu lugar!'
      />
      <RentImageUpload
        onChange={handleUploadImage}
        value={imageUrl}
      />
    </>
  )
}
