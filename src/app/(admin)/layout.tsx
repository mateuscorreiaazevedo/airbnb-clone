import { HeaderAdmin } from '@/components/header'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Painel do anfitrião - Airbnb | @mateuscorreiaazevedo'
}

export default function AdminLayout ({ children }: {children: React.ReactNode}) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeaderAdmin />
      <main className="container w-full h-full mt-2">
        {children}
      </main>
    </>
  )
}
