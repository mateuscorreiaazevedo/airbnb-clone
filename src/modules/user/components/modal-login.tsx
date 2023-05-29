'use client'

// Components
import { Button, InputField, ListItem, Modal } from '@/main/ui'
import { OauthOptions } from './oauth-options'
// Icons
import { X } from 'lucide-react'
// Utils
import { useRegisterModal } from '../hooks/use-register-modal'
import { useLoginModal } from '../hooks/use-login-modal'
import { FormProvider, useForm } from 'react-hook-form'
import { useUserMenu } from '../hooks/use-user-menu'
import { setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
// React
import React from 'react'

type Props = {
  button?: React.JSX.Element
}

export default function ModalLogin ({ button }: Props) {
  const { setOpen: openRegister } = useRegisterModal()
  const [loading, setLoading] = React.useState(false)
  const { setOpen: closePopover } = useUserMenu()
  const { setOpen, open } = useLoginModal()
  const methods = useForm<UserLogin>()
  const { refresh } = useRouter()

  const closeModal = () => {
    methods.reset()
    setOpen()
    refresh()
    closePopover()
  }

  async function handleLoginUser ({ email, password }: UserLogin) {
    setLoading(true)
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (res?.ok) {
      setNotification('Bem-vindo!', 'success')
      closeModal()
      setLoading(false)
    } else if (res?.error) {
      setNotification(res.error, 'error')
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <Modal
        button={button || <ListItem>Entrar</ListItem>}
        isOpen={open}
        toggleOpenChange={setOpen}
      >
        <div className="absolute w-modal min-h-modal shadow-md border border-zinc-300 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-white rounded-lg">
          <section className="flex w-full items-center px-4 h-16 border-b border-zinc-300">
            <button
              onClick={closeModal}
              className="p-2 rounded-full hover:bg-neutral-100 active:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="flex-1 text-center font-bold text-lg">Entrar</h2>
          </section>
          <section className="p-8 space-y-4">
            <h1 className="text-2xl font-semibold">Bem-vindo de volta</h1>
            <form
              onSubmit={methods.handleSubmit(handleLoginUser)}
              className="w-full flex flex-col items-center justify-center gap-4"
            >
              <fieldset>
                <InputField label="Email" field="email" roundedTop />
                <InputField label="Senha" field="password" roundedBotton hasPassword />
              </fieldset>
              <p className="text-zinc-400 text-xs w-field">
                Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem ser
                aplicadas tarifas padrão de dados e mensagens.{' '}
                <a href="/" className="text-black underline">
                  Política de Privacidade
                </a>
              </p>
              <Button disabled={loading} type="submit">
                {loading ? 'Aguarde...' : 'Continuar'}
              </Button>
            </form>
            <OauthOptions />
            <p className='text-sm text-center'>
              Ainda não possui uma conta?{' '}
              <button
                className='text-rose-500 font-bold'
                onClick={() => {
                  openRegister()
                  setOpen()
                }}
              >
                Registre-se
              </button>
            </p>
          </section>
        </div>
      </Modal>
    </FormProvider>
  )
}
