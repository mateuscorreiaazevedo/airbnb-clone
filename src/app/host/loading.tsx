import React from 'react'

export default function Loading () {
  return (
    <div>
      <div
        className='
          absolute
          top-1/2
          -translate-y-1/2
          right-1/2
          translate-x-1/2
          w-20
          h-20
          border-4
          border-transparent
          border-t-rose-500
          border-l-pink-500
          animate-spin
          rounded-full
        '
      />
    </div>
  )
}
