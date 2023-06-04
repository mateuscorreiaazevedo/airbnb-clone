import { HeaderMain } from '@/components/header'
import { Categories as CategoriesNavbar } from '@/modules/filters'
import React from 'react'

export default function AppLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* @ts-expect-error Server Components */}
      <HeaderMain />
      <CategoriesNavbar />
      <main className="contaner w-full h-full">{children}</main>
    </>
  )
}
