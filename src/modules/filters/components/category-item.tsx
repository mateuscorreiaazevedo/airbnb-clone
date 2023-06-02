'use client'

// Utils
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSetCategoryId } from '../hooks/use-set-category-id'

// React
import React from 'react'

// Types
import { CategoriesInterface } from '../types/filter-categories'

export const CategoryItem = (props: CategoriesInterface) => {
  const searchParams = useSearchParams()
  const categoryId = useSetCategoryId(props.id.toString(), searchParams)
  const pathname = usePathname()
  const { push } = useRouter()

  const hasCategoryId = searchParams?.has('category_id')

  const [activeCategory, setActiveCategory] = React.useState(() => {
    if (hasCategoryId) {
      return searchParams?.get('category_id') as string
    } else {
      return '1'
    }
  })

  function handleSetCategory () {
    push(`${pathname}?${categoryId}`)
  }

  React.useEffect(() => {
    if (hasCategoryId) {
      setActiveCategory(searchParams?.get('category_id') as string)
    } else {
      setActiveCategory('1')
    }
  }, [searchParams])

  return (
    <button
      title={props.description}
      onClick={handleSetCategory}
      className={`
        keen-slider__slide
        py-2.5
        px-3
        flex
        flex-col
        items-center
        justify-center
        hover:text-black
        transition-colors
        border-b-2
        ${activeCategory !== props.id.toString() ? 'hover:border-zinc-300' : ''}
        ${activeCategory === props.id.toString() ? 'text-black' : 'text-zinc-300'}
        ${activeCategory === props.id.toString() ? 'border-black' : 'border-transparent'}
        `}
    >
      <props.icon className="w-6 h-6 flex-1" />
      <p className="text-xs font-light truncate">{props.label}</p>
    </button>
  )
}
