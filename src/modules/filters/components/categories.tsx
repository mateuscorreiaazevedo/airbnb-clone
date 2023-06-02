'use client'
import { Filter } from 'lucide-react'
import { categoriesMocks } from '../mocks/categories'
import { CategoryItem } from './category-item'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'

export const Categories = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 10,
      spacing: 12
    }
  })

  return (
    <div className="sticky top-20 container mt-5 h-16 border-b border-zinc-100 flex items-center">
      <nav className="relative w-full flex gap-10 items-center justify-between">
        <div ref={sliderRef} className="keen-slider">
          {categoriesMocks.map(item => (
            <CategoryItem {...item} key={item.id} />
          ))}
        </div>
        <button className="flex items-center justify-center border border-zinc-300 rounded gap-4 p-2">
          <Filter className="w-4 h-4" /> Filtros
        </button>
      </nav>
    </div>
  )
}
