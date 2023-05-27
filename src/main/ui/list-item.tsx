import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode
  asBold?: boolean
}

export default function ListItem ({ children, asBold, ...rest }: Props) {
  return (
    <li
    {...rest}
    className={`${asBold ? 'font-semibold' : 'font-light'} text-base px-3 py-2 font-bold cursor-pointer hover:bg-neutral-100 transition-colors`}
    >
      {children}
    </li>
  )
}
