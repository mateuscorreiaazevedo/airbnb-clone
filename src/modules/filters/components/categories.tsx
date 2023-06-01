'use client'
import { Filter } from 'lucide-react'
import { categoriesMocks } from '../mocks/categories'
import { CategoryItem } from './category-item'
import React from 'react'

export const Categories = () => {
  return (
    <div className="sticky top-20 container mt-5 h-16 w-full border-b border-zinc-100 flex items-center">
      <nav className="flex-1 flex items-center justify-between">
        <div className='flex gap-4 flex-1 overflow-x-auto'>
          {categoriesMocks.map(item => (
            <CategoryItem {...item} key={item.id} />
          ))}
        </div>
        <button className='flex items-center justify-center border border-zinc-300 rounded gap-4 p-2'>
          <Filter className='w-4 h-4' /> Filtros
        </button>
      </nav>
    </div>
  )
}
