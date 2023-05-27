'use client'

// Components
import { ListItem, Popover } from '@/main/ui'
import Image from 'next/image'

// Contents
import { images } from '@/assets/images'
import { Menu } from 'lucide-react'

// React
import React from 'react'
import { ModalRegister } from './modal-register'
import { ModalLogin } from './modal-login'

export const UserMenu = () => {
  return (
    <Popover
      button={
        <div className="cursor-pointer p-2 border border-zinc-300 rounded-full h-11 flex items-center justify-center gap-2 hover:shadow-md transition-colors">
          <Menu className="w-4 h-4 text-zinc-800" />
          <Image
            src={images.avatarPlaceholder}
            alt=""
            className="w-[30px] aspect-square rounded-full"
          />
        </div>
      }
    >
      <div className="w-full py-2 mt-2 rounded-xl -translate-x-10 bg-white border border-zinc-300 shadow-lg">
        <ul className="flex flex-col">
          <ModalRegister />
          <ModalLogin />
          <div className="w-full h-px bg-zinc-200 my-2" />
          <ListItem>Anuncie seu espaço no airbnb</ListItem>
          <ListItem>Ajuda</ListItem>
        </ul>
      </div>
    </Popover>
  )
}
