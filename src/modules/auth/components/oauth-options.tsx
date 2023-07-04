'use client'

// Components
import { ButtonPrimary, Divisor } from '@/main/ui'
import Image from 'next/image'
// Images & Icons
import { images } from '@/assets/images'
// Utils
import { signIn } from 'next-auth/react'
// React
import React from 'react'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'

export const OauthOptions = () => {
  const { refresh } = useRouter()

  async function handleSignIn(nameProvider: string) {
    const response = await signIn(nameProvider, {
      redirect: false
    })

    if (response?.ok) {
      setNotification('Bem-vindo!', 'success')
      refresh()
    }

    if (response?.error) {
      setNotification(response.error, 'error')
    }
  }

  return (
    <>
      <span className="flex items-center gap-2">
        <Divisor />
        <p className="text-xs text-zinc-400">ou</p>
        <Divisor />
      </span>
      <div className="flex flex-col items-center gap-4">
        <ButtonPrimary styles="outline" onClick={() => handleSignIn('google')}>
          <Image src={images.googleIcon} alt="" className="w-8 h-6 ml-4" />
          <span className="flex-1 mr-4">Continuar com Google</span>
        </ButtonPrimary>
      </div>
    </>
  )
}
