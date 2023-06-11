import { slideUpContainer, slideUpItem } from '@/main/animations'
import { ImageUpload } from './inputs/image-upload'
import { Heading } from '@/modules/core'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  handleUploadImage: (value: string) => void
  imageUrl: string
}

export const ImageHost: React.FC<Props> = ({ handleUploadImage, imageUrl }) => {
  return (
    <motion.div initial='hidden' animate='visible' variants={slideUpContainer} className='w-full h-full'>
      <Heading
        title="Adicione uma foto do seu espaço."
        subtitle="Mostre aos convidados como é o seu lugar!"
      />
      <motion.div variants={slideUpItem} className='w-full h-full'>
        <ImageUpload onChange={handleUploadImage} value={imageUrl} />
      </motion.div>
    </motion.div>
  )
}
