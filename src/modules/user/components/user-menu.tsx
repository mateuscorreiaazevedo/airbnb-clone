'use client'

import { SignOut, useLoginModal, useRegisterModal } from '@/modules/auth'
import { useUserMenu } from '../hooks/use-user-menu'
import { ListItem, Popover } from '@/main/ui'
import { Menu } from 'lucide-react'
import { Avatar } from './avatar'
import Link from 'next/link'
import React from 'react'

type Props = {
  userAuth?: UserInfo | null
  onlyAvatar?: boolean
}

export const UserMenu = ({ userAuth, onlyAvatar = false }: Props) => {
  const { open, setOpen } = useUserMenu()
  const {setOpen: openLogin} = useLoginModal()
  const {setOpen: openRegister} = useRegisterModal()

  return (
    <Popover
      open={open}
      setOpen={setOpen}
      button={
        onlyAvatar
          ? (
          <div>
            <Avatar userAuth={userAuth} />
          </div>
            )
          : (
          <div className="cursor-pointer p-2 border border-zinc-300 rounded-full h-11 flex items-center justify-center gap-2 hover:shadow-md transition-colors">
            <Menu className="w-4 h-4 text-zinc-800" />
            <Avatar userAuth={userAuth} />
          </div>
            )
      }
    >
      <nav className="w-full py-2 mt-2 rounded-xl -translate-x-10 bg-white border border-zinc-300 shadow-lg">
        <ul className="flex flex-col">
          {userAuth
            ? (
            <>
              <Link href="/hosting">
                <ListItem>Minhas propriedades</ListItem>
              </Link>
              <ListItem>Minhas Reservas</ListItem>
              <ListItem>Minhas viagens</ListItem>
              <ListItem>Meus favoritos</ListItem>
              <SignOut />
            </>
              )
            : (
            <>
             <ListItem onClick={()=>openLogin()} asBold>Entrar</ListItem>
             <ListItem onClick={()=>openRegister()}>Cadastrar-se</ListItem>
            </>
              )}
          <div className="w-full h-px bg-zinc-200 my-2" />
          {!userAuth && (
            <Link href="host/homes">
              <ListItem>Anuncie seu espaço no airbnb</ListItem>
            </Link>
          )}
          <ListItem>Ajuda</ListItem>
        </ul>
      </nav>
    </Popover>
  )
}
