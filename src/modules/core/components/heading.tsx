import React from 'react'

type Props = {
  title: string
  subtitle?: string
}

export const Heading = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="animate-slide-up w-full text-start text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="w-full mb-10 text-start animate-slide-up text-2xl text-zinc-400 font-extralight">
          {subtitle}
        </p>
      )}
    </>
  )
}
