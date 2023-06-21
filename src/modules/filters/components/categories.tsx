'use client'

// Contents
import { categoriesMocks } from '../mocks/categories'

// Utils
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'

// React
import React from 'react'

// Components
import { CategoryItem } from './category-item'
import { ArrowSlider, settings } from '@/modules/core'
import { usePathname } from 'next/navigation'

const FilterModal = React.lazy(() => import('./modal-filters'))

export const Categories = () => {
  const sliderRef = React.useRef<Slider | undefined>()
  const pathname = usePathname()

  if (pathname !== '/') {
    return null
  }

  return (
    <nav className="sticky top-20 mt-5 border-b border-b-zinc-100 w-full h-16 container gap-4 flex items-center justify-between">
      <div className="relative w-full">
        <ArrowSlider onClick={() => sliderRef?.current?.slickPrev()} />
        {/* @ts-expect-error Ref Slider */}
        <Slider ref={sliderRef} {...settings}>
          {categoriesMocks.map(item => (
            <CategoryItem {...item} key={item.label} />
          ))}
        </Slider>
        <ArrowSlider hasRight onClick={() => sliderRef?.current?.slickNext()} />
      </div>
      <FilterModal />
    </nav>
  )
}
