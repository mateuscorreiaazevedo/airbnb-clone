import { HeaderAdmin } from '@/components/header'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Painél do anfitrião - Airbnb | Mateusdev'
}

export default function AdminLayout ({ children }: {children: React.ReactNode}) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeaderAdmin />
      <main className="container w-full h-full">
        {children}
      </main>
    </>
  )
}
