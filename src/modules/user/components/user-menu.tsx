'use client'

// Contents
import { images } from '@/assets/images'
import { Menu } from 'lucide-react'

// React
import React from 'react'

// Components
import { Login, Register, SignOut } from '@/modules/auth'
import { ListItem, Popover } from '@/main/ui'
import Image from 'next/image'

// Utils
import { useUserMenu } from '../hooks/use-user-menu'

type Props = {
  userAuth?: UserInfo | null
}

export const UserMenu = ({ userAuth }: Props) => {
  const { open, setOpen } = useUserMenu()

  return (
    <Popover
      open={open}
      setOpen={setOpen}
      button={
        <div className="cursor-pointer p-2 border border-zinc-300 rounded-full h-11 flex items-center justify-center gap-2 hover:shadow-md transition-colors">
          <Menu className="w-4 h-4 text-zinc-800" />
          <Image
            src={userAuth?.image ?? images.avatarPlaceholder}
            alt=""
            className="w-[30px] aspect-square rounded-full border border-zinc-300"
            width={30}
            height={30}
          />
        </div>
      }
    >
      <nav className="w-full py-2 mt-2 rounded-xl -translate-x-10 bg-white border border-zinc-300 shadow-lg">
        <ul className="flex flex-col">
          {userAuth
            ? (
            <>
              <ListItem>Minhas propriedades</ListItem>
              <ListItem>Minhas Reservas</ListItem>
              <ListItem>Minhas viagens</ListItem>
              <ListItem>Meus favoritos</ListItem>
              <SignOut />
            </>
              )
            : (
            <>
              <Register />
              <Login />
            </>
              )}
          <div className="w-full h-px bg-zinc-200 my-2" />
          <ListItem>Anuncie seu espaço no airbnb</ListItem>
          <ListItem>Ajuda</ListItem>
        </ul>
      </nav>
    </Popover>
  )
}
