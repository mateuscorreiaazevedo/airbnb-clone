import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const ButtonRounded: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button {...rest} className="w-10 h-10 rounded-full border bg-white border-neutral-100 flex items-center justify-center text-neutral-600 hover:shadow hover:bg-neutral-50 active:bg-neutral-200 disabled:text-neutral-100 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-none">
      {children}
    </button>
  )
}
