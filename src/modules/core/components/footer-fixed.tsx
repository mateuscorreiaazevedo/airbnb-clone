import { Children } from '../types/children'
import React from 'react'

export const FooterFixed = ({ children }: Children) => {
  return (
    <footer className="container fixed bottom-0 h-20 w-full bg-white border-t border-t-zinc-300 flex items-center justify-between">
      {children}
    </footer>
  )
}
