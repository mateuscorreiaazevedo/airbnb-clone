import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {
  onClick: () => void
  hasRight?: boolean
  disabled?: boolean
}

export const ArrowSlider: React.FC<Props> = ({ onClick, hasRight, disabled }) => {
  if (disabled) {
    return null
  }

  if (hasRight) {
    return (
      <button
        onClick={onClick}
        className="absolute z-10 active:bg-neutral-50 top-1/2 -translate-y-1/2 -right-5 p-1 md:p-2 bg-white text-zinc-900 border hover:shadow-lg border-zinc-100 rounded-full"
      >
        <ChevronRight className='sm:w-5 sm:h-5 w-4 h-4' />
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className="absolute z-10 active:bg-neutral-50 top-1/2 -translate-y-1/2 -left-5 p-1 md:p-2 bg-white text-zinc-900 border hover:shadow-lg border-zinc-100 rounded-full"
    >
      <ChevronLeft className='sm:w-5 sm:h-5 w-4 h-4' />
    </button>
  )
}
