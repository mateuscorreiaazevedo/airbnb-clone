import { slideUpContainer, slideUpItem } from '@/main/animations'
import { useFormContext } from 'react-hook-form'
import { Heading } from '@/modules/core'
import { InputField } from '@/main/ui'
import { motion } from 'framer-motion'
import React from 'react'

export const DescriptionHost = () => {
  const { register } = useFormContext<HostForm>()
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpContainer}
      className="w-full h-full space-y-4"
    >
      <Heading
        title="Como você descreveria seu lugar?"
        subtitle="Descreva de forma clara para que funcione melhor!"
      />
      <div className="animate-slide-up">
        <InputField field="title" label="Título do seu espaço!" rounded />
      </div>
      <motion.textarea
        variants={slideUpItem}
        {...register('description')}
        placeholder="Insira uma descrição sobre seu espaço"
        className='w-full outline-none border border-zinc-400 focus:border-2 focus-within:border-rose-500 py-4 px-6 resize-none min-h-[40vh] rounded-lg transition-all'
      />
    </motion.div>
  )
}
