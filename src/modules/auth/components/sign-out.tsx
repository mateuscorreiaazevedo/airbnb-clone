'use client'

// Components
import { ListItem } from '@/main/ui'

// Utils
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

// React
import React from 'react'

const SignOut = () => {
  const { push } = useRouter()

  function handleSignOut () {
    signOut()
    push('/')
  }

  return (
    <ListItem asBold onClick={handleSignOut}>
      Sair
    </ListItem>
  )
}

export default SignOut
