import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Hospede aqui sua propriedade - Airbnb | @mateuscorreiaazevedo'
}

export default function HostLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>
}
