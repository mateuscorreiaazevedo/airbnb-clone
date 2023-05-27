import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  styles?: 'outline' | 'default'
}

export const Button: React.FC<Props> = ({ children, type, styles = 'default', ...rest }) => {
  if (styles === 'outline') {
    return (
      <button
        type={type}
        {...rest}
        className="flex items-center justify-center active:bg-neutral-100 border border-zinc-950 transition-colors w-field h-12 rounded-lg  text-black font-bold hover:bg-neutral-50"
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type={type}
      {...rest}
      className="flex items-center justify-center active:bg-gradient-to-r transition-colors w-field h-12 rounded-lg bg-gradient-to-l text-white font-bold to-rose-500 from-pink-500"
    >
      {children}
    </button>
  )
}
