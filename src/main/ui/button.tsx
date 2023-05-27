import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='w-field h-12 rounded-lg bg-gradient-to-l text-white font-bold to-rose-500 from-pink-500'
    >{children}</button>
  )
}
