import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  type?: 'button' | 'reset' | 'submit'
  variant?: 'outline' | 'default' | 'none'
}

export const ButtonSecondary: React.FC<Props> = ({
  children,
  type,
  variant = 'default',
  ...rest
}) => {
  if (variant === 'none') {
    return null
  }

  if (variant === 'outline') {
    return (
      <button
        type={type}
        {...rest}
        className="underline font-bold transition-all px-2 py-1 hover:bg-neutral-100 rounded-md"
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type={type}
      {...rest}
      className="font-semibold disabled:cursor-not-allowed bg-zinc-900 px-8 py-3 hover:bg-zinc-950 rounded-md text-white"
    >
      {children}
    </button>
  )
}
