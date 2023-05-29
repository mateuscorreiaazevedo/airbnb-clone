'use client'

// Contents
import { images } from '@/assets/images'
import { Menu } from 'lucide-react'

// React
import React from 'react'

// Components
import { ListItem, Popover } from '@/main/ui'
import Image from 'next/image'

const Register = React.lazy(() => import('./modal-register'))
const Login = React.lazy(() => import('./modal-login'))
const SignOut = React.lazy(() => import('./sign-out'))

type Props = {
  isLogged?: boolean
}

export const UserMenu = ({ isLogged }: Props) => {
  return (
    <Popover
      button={
        <div className="cursor-pointer p-2 border border-zinc-300 rounded-full h-11 flex items-center justify-center gap-2 hover:shadow-md transition-colors">
          <Menu className="w-4 h-4 text-zinc-800" />
          <Image
            src={images.avatarPlaceholder}
            alt=""
            className="w-[30px] aspect-square rounded-full border border-zinc-300"
          />
        </div>
      }
    >
      <div className="w-full py-2 mt-2 rounded-xl -translate-x-10 bg-white border border-zinc-300 shadow-lg">
        <ul className="flex flex-col">
          {isLogged
            ? (
            <SignOut />
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
      </div>
    </Popover>
  )
}
