'use client'

import { slideUpItem } from '@/main/animations'
import { Minus, Plus } from 'lucide-react'
import { ButtonRounded } from '@/main/ui'
import { motion } from 'framer-motion'
import React from 'react'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

export const RentInfoCounter: React.FC<CounterProps> = ({
  onChange,
  subtitle,
  title,
  value
}) => {
  const handleAddCounter = React.useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const handleReduceCounter = React.useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value - 1)
  }, [onChange, value])

  return (
    <motion.div variants={slideUpItem} className="flex flex-row w-full items-center justify-between">
      <div className="flex flex-col">
        <p className="font-semibold">{title}</p>
        <span className="font-light text-gray-400">{subtitle}</span>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ButtonRounded onClick={handleReduceCounter}>
          <Minus size={24} />
        </ButtonRounded>
        <h3 className="font-light text-xl text-neutral-600">{value}</h3>
        <ButtonRounded onClick={handleAddCounter}>
          <Plus size={24} />
        </ButtonRounded>
      </div>
    </motion.div>
  )
}
