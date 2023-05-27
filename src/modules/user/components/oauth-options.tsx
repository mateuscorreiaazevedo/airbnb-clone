// Components
import { Button, Divisor } from '@/main/ui'
import Image from 'next/image'
// Images & Icons
import { images } from '@/assets/images'
import { Github } from 'lucide-react'
// React
import React from 'react'

export const OauthOptions = () => {
  return (
    <>
      <span className="flex items-center gap-2">
        <Divisor />
        <p className="text-xs text-zinc-400">ou</p>
        <Divisor />
      </span>
      <div className="flex flex-col items-center gap-4">
        <Button styles="outline">
          <Image src={images.googleIcon} alt='' className='w-8 h-6 ml-4' />
          <span className="flex-1 mr-4">Continuar com Google</span>
        </Button>
        <Button styles="outline">
          <Github className='w-8 h-6 ml-4' />
          <span className='flex-1 mr-4'>Continuar com Github</span>
        </Button>
      </div>
    </>
  )
}
