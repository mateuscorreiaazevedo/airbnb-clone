'use client'

// Components
import { ListItem } from '@/main/ui'

// Utils
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

// React
import React from 'react'

const SignOut = () => {
  const { refresh } = useRouter()

  function handleSignOut () {
    signOut()
    refresh()
  }

  return (
    <ListItem asBold onClick={handleSignOut}>
      Sair
    </ListItem>
  )
}

export default SignOut
