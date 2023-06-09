'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navigationLinks = [
  {
    path: '/hosting',
    label: 'Hoje'
  },
  // {
  //   path: '/inbox',
  //   label: 'Mensagens'
  // },
  {
    path: '/become-a-host',
    label: 'Criar anúncio'
  }
]

export const AdminNav = () => {
  const pathname = usePathname()

  if (pathname === '/become-a-host') {
    return null
  }

  return (
    <nav className="flex gap-4 items-center justify-center">
      {navigationLinks.map(item => (
        <Link
          className={`group/item ${
            pathname === item.path ? 'font-bold text-neutral-950' : 'font-medium'
          } text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 px-4 py-2 rounded-full transition-all`}
          href={item.path}
          key={item.path}
        >
          {item.label}
          {pathname === item.path && (
            <div className="w-1/2 mx-auto group-hover/item:invisible h-0.5 self-end rounded-full bg-black" />
          )}
        </Link>
      ))}
    </nav>
  )
}
