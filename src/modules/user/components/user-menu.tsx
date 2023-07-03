'use client'

import { SignOut, useLoginModal, useRegisterModal } from '@/modules/auth'
import { useUserMenu } from '../hooks/use-user-menu'
import { ListItem, Popover } from '@/main/ui'
import { useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Avatar } from './avatar'
import React from 'react'

type Props = {
  userAuth?: UserInfo | null
  onlyAvatar?: boolean
}

export const UserMenu = ({ userAuth, onlyAvatar = false }: Props) => {
  const { setOpen: openRegister } = useRegisterModal()
  const { setOpen: openLogin } = useLoginModal()
  const { open, setOpen } = useUserMenu()
  const router = useRouter()

  const handlePush = (href: string) => {
    router.push(href)
    setOpen()
  }

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
                <ListItem onClick={() => handlePush('/hosting')}>
                  Minhas propriedades
                </ListItem>
                <ListItem onClick={() => handlePush('/trips')}>
                  Minhas viagens
                </ListItem>
                <ListItem onClick={() => handlePush('/my-favorites')}>
                  Meus favoritos
                </ListItem>
                <SignOut />
              </>
            )
            : (
              <>
                <ListItem onClick={() => openLogin()} asBold>Entrar</ListItem>
                <ListItem onClick={() => openRegister()}>Cadastrar-se</ListItem>
              </>
            )}
          <div className="w-full h-px bg-zinc-200 my-2" />
          {!userAuth && (
            <ListItem onClick={() => handlePush('/host/homes')}>
              Anuncie seu espaço no airbnb
            </ListItem>
          )}
          <ListItem>Ajuda</ListItem>
        </ul>
      </nav>
    </Popover>
  )
}
