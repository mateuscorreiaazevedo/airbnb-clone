import { slideUpContainer } from '@/main/animations'
import { RentCategoryInput } from './rent-category-input'
import { categoriesMocks } from '@/modules/filters'
import { motion } from 'framer-motion'

import React from 'react'

type Props = {
  setClick: (id: number) => void
  selectedCategory: number
}

export const CategoryRent = ({ selectedCategory, setClick }: Props) => {
  return (
    <>
      <h1 className="animate-slide-up text-3xl font-bold">
        Qual das seguintes opções descreve melhor seu espaço?
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUpContainer}
        className="mt-4 grid grid-cols-2 w-full md:grid-cols-3 gap-4"
      >
        {categoriesMocks.map(item => (
          <RentCategoryInput
            item={item}
            setCategoryId={setClick}
            categoryId={selectedCategory}
            key={item.label}
          />
        ))}
      </motion.div>
    </>
  )
}
