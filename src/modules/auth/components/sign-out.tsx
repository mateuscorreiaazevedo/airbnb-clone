'use client'

import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { ListItem } from '@/main/ui'
import React from 'react'

const SignOut = () => {
  const { push } = useRouter()

  async function handleSignOut() {
    await signOut()
    push('/')
  }

  return (
    <ListItem asBold onClick={handleSignOut}>
      Sair
    </ListItem>
  )
}

export default SignOut
