import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
}

export const Button: React.FC<Props> = ({ children, type, ...rest }) => {
  return (
    <button
      type={type}
      {...rest}
      className="active:bg-gradient-to-r transition-colors w-field h-12 rounded-lg bg-gradient-to-l text-white font-bold to-rose-500 from-pink-500"
    >
      {children}
    </button>
  )
}
