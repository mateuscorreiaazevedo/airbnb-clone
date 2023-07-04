import React from 'react'

type Props = {
  direction?: 'vertical' | 'horizontal'
}

export const Divisor: React.FC<Props> = ({ direction = 'horizontal' }) => {
  return (
    <>
      {direction === 'vertical' && <div className="w-px h-full bg-zinc-300" />}
      {direction === 'horizontal' && <div className="w-full h-px bg-zinc-300" />}
    </>
  )
}
