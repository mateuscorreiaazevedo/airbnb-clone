'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import {
  CategoryHost,
  DescriptionHost,
  ImageHost,
  InfoHost,
  LocationHost,
  PriceHost,
  hostService
} from '@/modules/host'
import { FooterFixed, setNotification } from '@/modules/core'
import { useRouter } from 'next/navigation'
import { ButtonSecondary } from '@/main/ui'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

export default function BecomeAHost() {
  const [step, setStep] = React.useState(STEPS.CATEGORY)
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
  const methods = useForm<HostForm>({
    defaultValues: {
      bathrooms: 1,
      rooms: 1,
      guests: 1
    }
  })

  // Fields for isolated components
  const categoryId = methods.watch('categoryId')
  const location = methods.watch('location')
  const guests = methods.watch('guests')
  const rooms = methods.watch('rooms')
  const bathrooms = methods.watch('bathrooms')
  const imageUrl = methods.watch('imageUrl')

  // Navigation steps
  const onBackStep = () => {
    setStep(state => state - 1)
  }

  const onNextStep = () => {
    setStep(state => state + 1)
  }

  const handleValue = (id: any, value: any) => {
    methods.setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const handleCreateHost: SubmitHandler<HostForm> = async hostData => {
    setLoading(true)
    if (step === STEPS.PRICE) {
      try {
        const message = await hostService.createHost({
          ...hostData,
          locationValue: hostData.location.value
        })
        router.push('/')
        setNotification(message as string, 'success')
      } catch (error) {
        setNotification((error as any).message, 'error')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleCreateHost)}
        className="mt-4 max-w-3xl mx-auto h-full flex flex-col gap-4 justify-center items-center"
      >
        {step === STEPS.CATEGORY && (
          <>
            <CategoryHost
              setClick={value => handleValue('categoryId', value)}
              selectedCategory={categoryId}
            />
            <FooterFixed>
              <div />
              <ButtonSecondary onClick={onNextStep} type="button">
                Avançar
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
        {step === STEPS.LOCATION && (
          <>
            <LocationHost
              value={location}
              onChange={value => handleValue('location', value)}
            />
            <FooterFixed>
              <ButtonSecondary onClick={onBackStep} variant="outline" type="button">
                Voltar
              </ButtonSecondary>
              <ButtonSecondary onClick={onNextStep} type="button">
                Avançar
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
        {step === STEPS.INFO && (
          <>
            <InfoHost
              guests={guests}
              rooms={rooms}
              bathrooms={bathrooms}
              changeGuests={count => handleValue('guests', count)}
              changeRooms={count => handleValue('rooms', count)}
              changeBathrooms={count => handleValue('bathrooms', count)}
            />
            <FooterFixed>
              <ButtonSecondary onClick={onBackStep} variant="outline" type="button">
                Voltar
              </ButtonSecondary>
              <ButtonSecondary onClick={onNextStep} type="button">
                Avançar
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
        {step === STEPS.IMAGES && (
          <>
            <ImageHost
              handleUploadImage={value => handleValue('imageUrl', value)}
              imageUrl={imageUrl}
            />
            <FooterFixed>
              <ButtonSecondary onClick={onBackStep} variant="outline" type="button">
                Voltar
              </ButtonSecondary>
              <ButtonSecondary onClick={onNextStep} type="button">
                Avançar
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
        {step === STEPS.DESCRIPTION && (
          <>
            <DescriptionHost />
            <FooterFixed>
              <ButtonSecondary onClick={onBackStep} variant="outline" type="button">
                Voltar
              </ButtonSecondary>
              <ButtonSecondary onClick={onNextStep} type="button">
                Avançar
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
        {step === STEPS.PRICE && (
          <>
            <PriceHost />
            <FooterFixed>
              <ButtonSecondary onClick={onBackStep} variant="outline" type="button">
                Voltar
              </ButtonSecondary>
              <ButtonSecondary type="submit">
                {loading ? 'Concluindo...' : 'Concluir'}
              </ButtonSecondary>
            </FooterFixed>
          </>
        )}
      </form>
    </FormProvider>
  )
}
