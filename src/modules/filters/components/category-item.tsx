'use client'

// Utils
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSetCategoryId } from '../hooks/use-set-category-id'

// React
import React from 'react'

// Types
import { CategoriesInterface } from '../types/filter-categories'

export const CategoryItem = (props: CategoriesInterface) => {
  const params = useSearchParams()
  const queryString = useSetCategoryId(props.id.toString(), params)
  const { push, refresh } = useRouter()
  const pathname = usePathname()

  const activeCategory = React.useMemo(() => {
    const categoryId = params?.get('category_id') || '1'

    return categoryId
  }, [params, queryString])

  function handleSetCategory () {
    push(`${pathname}?${queryString}`)
    refresh()
  }

  return (
    <button
      title={props.description}
      onClick={handleSetCategory}
      className={`
        keen-slider__slide
        flex
        py-3
        flex-col
        items-center
        justify-center
        hover:text-black
        transition-colors
        border-b-2
        max-h-16
        w-full
        ${activeCategory !== props.id.toString() ? 'hover:border-zinc-300' : ''}
        ${activeCategory === props.id.toString() ? 'text-black' : 'text-zinc-300'}
        ${activeCategory === props.id.toString() ? 'border-black' : 'border-transparent'}
        `}
    >
      <props.icon size={24} />
      <p className="text-xs font-light truncate">{props.label}</p>
    </button>
  )
}
