'use client'

import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ButtonRounded, Popover } from '@/main/ui'
import { useFormContext } from 'react-hook-form'
import React from 'react'

type Props = {
  maxGuests?: number
}

const ReservationPopoverInfo: React.FC<Props> = ({ maxGuests }) => {
  const [open, setOpen] = React.useState(false)
  const { setValue, watch } = useFormContext()

  const toggleOpen = () => setOpen(!open)

  return (
    <Popover
      button={
        <button className='w-full h-14 p-2 font-bold flex items-center justify-between'>
          Hóspedes {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      }
      open={open}
      setOpen={toggleOpen}
    >
      <ul className='flex flex-col gap-2 h-full w-96 mt-3 shadow-lg py-4 px-2 bg-white border border-neutral-100 rounded-lg'>
        <li className='flex items-center justify-between w-full'>
          <section className='flex flex-col flex-1'>
            <p className='font-bold'>Número de Adultos</p>
            <span className='text-sm font-light'>Com 13 anos ou mais</span>
          </section>
          <div className='flex items-center gap-2'>
            <ButtonRounded>
              <Minus size={24} />
            </ButtonRounded>
            <span>1</span>
            <ButtonRounded>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className='flex items-center justify-between w-full'>
          <section className='flex flex-col flex-1'>
            <p className='font-bold'>Número de Crianças</p>
            <span className='text-sm font-light'>De 2 a 12 anos</span>
          </section>
          <div className='flex items-center gap-2'>
            <ButtonRounded>
              <Minus size={24} />
            </ButtonRounded>
            <span>1</span>
            <ButtonRounded>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className='flex items-center justify-between w-full'>
          <section className='flex flex-col flex-1'>
            <p className='font-bold'>Bebês</p>
            <span className='text-sm font-light'>Menor de 2 anos</span>
          </section>
          <div className='flex items-center gap-2'>
            <ButtonRounded>
              <Minus size={24} />
            </ButtonRounded>
            <span>1</span>
            <ButtonRounded>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className='text-xs'>
          Este espaço acomoda no máximo {maxGuests} hóspedes, não incluindo bebês.
        </li>
        <li className='w-full text-end font-semibold hover:underline cursor-pointer' onClick={() => setOpen(false)}>
          Fechar
        </li>
      </ul>
    </Popover>
  )
}

export default ReservationPopoverInfo
