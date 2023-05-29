'use client'

import { ListItem } from '@/main/ui'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignOut = () => {
  const { refresh } = useRouter()

  function handleSignOut () {
    signOut({ redirect: false })
    refresh()
  }

  return (
    <ListItem asBold onClick={handleSignOut}>
      Sair
    </ListItem>
  )
}

export default SignOut
