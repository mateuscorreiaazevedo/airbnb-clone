// Components
import { Categories as CategoriesNavbar } from '@/modules/filters'
import { HeaderApp } from '@/components/header'

// React
import React from 'react'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* @ts-expect-error Server Components */}
      <HeaderApp />
      <CategoriesNavbar />
      <main className="container w-full h-full mt-2">{children}</main>
    </>
  )
}
