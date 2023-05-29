'use client'

// Components
import { Button, InputField, ListItem, Modal } from '@/main/ui'
import { OauthOptions } from './oauth-options'
// Icons
import { X } from 'lucide-react'
// Utils
import { useRegisterModal } from '../hooks/use-register-modal'
import { FormProvider, useForm } from 'react-hook-form'
import { useUserMenu } from '../hooks/use-user-menu'
import { setNotification } from '@/modules/core'
// Service
import { userService } from '../service/user-service'
// React
import React from 'react'
import { useLoginModal } from '../hooks/use-login-modal'

type Props = {
  button?: React.JSX.Element
}

export default function ModalRegister ({ button }: Props) {
  const [loading, setLoading] = React.useState(false)
  const { setOpen: closePopover } = useUserMenu()
  const { setOpen: setLogin } = useLoginModal()
  const { open, setOpen } = useRegisterModal()
  const methods = useForm<UserRegister>()

  const closeModal = () => {
    methods.reset()
    closePopover()
    setOpen()
  }

  const navigateToLoginModal = () => {
    setLogin()
    setOpen()
  }

  async function handleRegisterUser ({ email, name, password, confirmPassword }: UserRegister) {
    setLoading(true)
    try {
      const response = await userService.register({
        confirmPassword,
        email,
        name,
        password
      })
      setNotification(response, 'success')
      navigateToLoginModal()
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <Modal
        button={button || <ListItem asBold>Cadastrar-se</ListItem>}
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
            <h2 className="flex-1 text-center font-bold text-lg">Cadastrar-se</h2>
          </section>
          <section className="p-8 space-y-4">
            <h1 className="text-2xl font-semibold">Bem-vindo ao Airbnb</h1>
            <form
              onSubmit={methods.handleSubmit(handleRegisterUser)}
              className="w-full flex flex-col items-center justify-center gap-4"
            >
              <fieldset>
                <InputField label="Email" field="email" roundedTop />
                <InputField label="Nome" field="name" />
                <InputField label="Senha" field="password" hasPassword />
                <InputField
                  label="Confirmar senha"
                  field="confirmPassword"
                  roundedBotton
                  hasPassword
                />
              </fieldset>
              <p className="text-zinc-400 text-xs w-field">
                Ligaremos ou enviaremos uma mensagem para confirmar seu número. Podem ser
                aplicadas tarifas padrão de dados e mensagens.{' '}
                <a href="/" className="text-black underline">
                  Política de Privacidade
                </a>
              </p>
              <Button disabled={loading}>{!loading ? 'Cadastrar-se' : 'Aguarde...'}</Button>
            </form>
            <OauthOptions />
            <p className='text-sm text-center'>
              Já possui uma conta?{' '}
              <button
                className='text-rose-500 font-bold'
                onClick={navigateToLoginModal}
              >
                Faça login
              </button>
            </p>
          </section>
        </div>
      </Modal>
    </FormProvider>
  )
}
