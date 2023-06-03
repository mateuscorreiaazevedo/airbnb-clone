'use client'

// Contents
import { categoriesMocks } from '../mocks/categories'

// Utils
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

// React
import React from 'react'

// Components
import { CategoryItem } from './category-item'

const FilterModal = React.lazy(() => import('./modal-filters'))

export const Categories = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 8,
      spacing: 12
    }
  })

  return (
    <nav className="sticky top-20 mt-5 border-b border-b-zinc-100 w-full h-16 container gap-4 flex items-center justify-between">
      <div className="relative w-full md:w-[90%]">
        <div ref={sliderRef} className="keen-slider">
          {categoriesMocks.map(item => (
            <CategoryItem {...item} key={item.label} />
          ))}
        </div>
      </div>
      <FilterModal />
    </nav>
  )
}
