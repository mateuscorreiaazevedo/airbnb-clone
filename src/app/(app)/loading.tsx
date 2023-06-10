import React from 'react'

export default function Loading () {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <div
        className='
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
