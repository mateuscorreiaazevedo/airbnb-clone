import React from 'react'

type Props = {
  title: string
  subtitle?: string
  asCenter?: boolean
}

export const Heading = ({ title, subtitle, asCenter }: Props) => {
  return (
    <>
      <h1 className={`animate-slide-up w-full ${asCenter ? 'text-center' : 'text-start'} text-3xl font-bold`}>{title}</h1>
      {subtitle && (
        <p className={`w-full mb-10 ${asCenter ? 'text-center' : 'text-start'} animate-slide-up text-xl text-zinc-400 font-extralight`}>
          {subtitle}
        </p>
      )}
    </>
  )
}
