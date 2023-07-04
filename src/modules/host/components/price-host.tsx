import { InputField } from '@/main/ui'
import { Heading } from '@/modules/core'
import React from 'react'

export const PriceHost = () => {
  return (
    <>
      <Heading
        title="Agora, defina o preço"
        subtitle="Quanto será o valor por noite?"
      />
      <div className="w-full animate-slide-up">
        <InputField field="price" label="Preço em BRL (R$)" hasNumber rounded />
      </div>
      <p className="w-full animate-slide-up text-sm text-zinc-300">
        *Adicione o preço considerando todos os impostos incluídos de acordo com as
        diretrízes do site.*
      </p>
    </>
  )
}
