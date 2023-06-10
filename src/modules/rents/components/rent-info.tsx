import { RentInfoCounter } from './rent-info-counter'
import { slideUpContainer } from '@/main/animations'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  guests: number
  changeGuests: (value: number) => void
  rooms: number
  changeRooms: (value: number) => void
  bathrooms: number
  changeBathrooms: (value: number) => void
}

export const RentInfo: React.FC<Props> = ({
  bathrooms,
  changeGuests,
  changeRooms,
  changeBathrooms,
  guests,
  rooms
}) => {
  return (
    <>
      <h1 className="animate-slide-up w-full text-start text-3xl font-bold">
        Compartilhe algumas noções básicas sobre seu lugar
      </h1>
      <p className="w-full mb-10 text-start animate-slide-up text-2xl text-zinc-400 font-extralight">
        Quais comodidades você oferece?
      </p>
      <motion.div animate='visible' initial='hidden' variants={slideUpContainer} className='space-y-10 w-full'>
        <RentInfoCounter
          title="Convidados"
          subtitle="Quantidade de convidados?"
          value={guests}
          onChange={changeGuests}
        />
        <RentInfoCounter
          title="Cômodos"
          subtitle="Quantidade de cômodos?"
          value={rooms}
          onChange={changeRooms}
        />
        <RentInfoCounter
          title="Banheiros"
          subtitle="Quantidade de banheiros?"
          value={bathrooms}
          onChange={changeBathrooms}
        />
      </motion.div>
    </>
  )
}
