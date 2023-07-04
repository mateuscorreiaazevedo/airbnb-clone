'use client'

import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ButtonRounded, Popover } from '@/main/ui'
import { useFormContext } from 'react-hook-form'
import React from 'react'

type Props = {
  maxGuests?: number
}

const ReservationPopoverInfo: React.FC<Props> = ({ maxGuests }) => {
  const [childrens, setChildrens] = React.useState(0)
  const [adults, setAdults] = React.useState(1)
  const [open, setOpen] = React.useState(false)
  const { setValue, watch } = useFormContext<ReservationForm>()

  const babies = watch('babies')
  const guests = watch('guests')
  const toggleOpen = () => setOpen(!open)

  const handleValue = (id: any, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const addAdults = React.useCallback(() => {
    setAdults(prev => prev + 1)
    handleValue('guests', Number(guests) + 1)
  }, [guests, adults])

  const reduceAdults = React.useCallback(() => {
    setAdults(prev => prev - 1)
    handleValue('guests', Number(guests) - 1)
  }, [guests, adults])

  const addChildrens = React.useCallback(() => {
    setChildrens(prev => prev + 1)
    handleValue('guests', Number(guests) + 1)
  }, [guests, childrens])

  const reduceChildrens = React.useCallback(() => {
    setChildrens(prev => prev - 1)
    handleValue('guests', Number(guests) - 1)
  }, [guests, childrens])

  const addBabies = React.useCallback(() => {
    handleValue('babies', Number(babies) + 1)
  }, [babies])

  const reduceBabies = React.useCallback(() => {
    handleValue('babies', Number(babies) - 1)
  }, [babies])

  return (
    <Popover
      button={
        <button className="w-full h-14 p-2 font-bold flex items-center justify-between">
          Hóspedes {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      }
      open={open}
      setOpen={toggleOpen}
    >
      <ul className="flex flex-col gap-2 h-full w-96 -mt-0.5 shadow-lg py-4 px-2 bg-white border border-neutral-300 rounded-lg">
        <li className="flex items-center justify-between w-full">
          <section className="flex flex-col flex-1">
            <p className="font-bold">Adultos</p>
            <span className="text-sm font-light">Com 13 anos ou mais</span>
          </section>
          <div className="flex items-center gap-2">
            <ButtonRounded onClick={reduceAdults} disabled={adults === 1}>
              <Minus size={24} />
            </ButtonRounded>
            <span>{adults}</span>
            <ButtonRounded onClick={addAdults} disabled={guests === maxGuests}>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className="flex items-center justify-between w-full">
          <section className="flex flex-col flex-1">
            <p className="font-bold">Crianças</p>
            <span className="text-sm font-light">De 2 a 12 anos</span>
          </section>
          <div className="flex items-center gap-2">
            <ButtonRounded onClick={reduceChildrens} disabled={childrens === 0}>
              <Minus size={24} />
            </ButtonRounded>
            <span>{childrens}</span>
            <ButtonRounded onClick={addChildrens} disabled={guests === maxGuests}>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className="flex items-center justify-between w-full">
          <section className="flex flex-col flex-1">
            <p className="font-bold">Bebês</p>
            <span className="text-sm font-light">Menor de 2 anos</span>
          </section>
          <div className="flex items-center gap-2">
            <ButtonRounded disabled={babies === 0} onClick={reduceBabies}>
              <Minus size={24} />
            </ButtonRounded>
            <span>{babies}</span>
            <ButtonRounded disabled={babies === 5} onClick={addBabies}>
              <Plus size={24} />
            </ButtonRounded>
          </div>
        </li>
        <li className="text-xs w-full">
          Este espaço acomoda no máximo {maxGuests} hóspedes, não incluindo bebês.
        </li>
        <li
          className="w-full text-end px-4 font-semibold hover:underline cursor-pointer"
          onClick={() => setOpen(false)}
        >
          Fechar
        </li>
      </ul>
    </Popover>
  )
}

export default ReservationPopoverInfo
