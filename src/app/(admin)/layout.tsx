// Components
import { HeaderAdmin } from '@/components/header'

// React
import React from 'react'

// Types
import { Metadata } from 'next'

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
