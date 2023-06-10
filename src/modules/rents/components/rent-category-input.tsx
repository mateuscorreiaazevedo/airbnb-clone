import { slideUpItem } from '@/main/animations'
import { CategoriesInterface } from '@/modules/filters'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  item: CategoriesInterface
  setCategoryId: (id: number) => void
  categoryId: number
}

export function RentCategoryInput ({ item, setCategoryId, categoryId }: Props) {
  return (
    <motion.div
      variants={slideUpItem}
      onClick={() => setCategoryId(item.id)}
      className={`flex flex-col w-full cursor-pointer border-zinc-300 border outline outline-transparent outline-[3px] -outline-offset-1 hover:outline-black transition-all rounded-lg justify-center items-start px-4 py-4 ${
        categoryId === item.id ? 'outline-black bg-neutral-100' : ''
      }`}
      key={item.label}
    >
      <item.icon className="w-10 h-w-10" />
      <p className="font-semibold">{item.label}</p>
    </motion.div>
  )
}
