import { RentInfoCounter } from './rent-info-counter'
import { slideUpContainer } from '@/main/animations'
import { Heading } from '@/modules/core'
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
      <Heading
        title="Compartilhe algumas noções básicas sobre seu lugar"
        subtitle="Quais comodidades você oferece?"
      />
      <motion.div
        animate="visible"
        initial="hidden"
        variants={slideUpContainer}
        className="space-y-10 w-full"
      >
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
