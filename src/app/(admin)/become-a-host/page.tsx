'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import React from 'react'
import {
  CategoryHost,
  DescriptionHost,
  ImageHost,
  InfoHost,
  LocationHost,
  PriceHost
} from '@/modules/host'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

export default function BecomeAHost () {
  const [step, setStep] = React.useState(STEPS.CATEGORY)
  const methods = useForm<HostForm>()

  // Navigation steps
  const onBackStep = () => {
    if (step !== STEPS.CATEGORY) {
      setStep(state => state - 1)
    }
  }
  const onNextStep = () => {
    setStep(state => state + 1)
  }

  // Fields for isolated components
  const categoryId = methods.watch('categoryId')
  const location = methods.watch('location')
  const guests = methods.watch('guests')
  const rooms = methods.watch('rooms')
  const bathrooms = methods.watch('bathrooms')
  const imageUrl = methods.watch('imageUrl')

  const handleValue = (id: any, value: any) => {
    methods.setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const handleCreateHost: SubmitHandler<HostForm> = async hostData => {
    if (step !== STEPS.PRICE) {
      return onNextStep()
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleCreateHost)}
        className="mt-4 max-w-3xl mx-auto h-full flex flex-col gap-4 justify-center items-center"
      >
        {step === STEPS.CATEGORY && (
          <CategoryHost
            setClick={value => handleValue('categoryId', value)}
            selectedCategory={categoryId}
          />
        )}
        {step === STEPS.LOCATION && (
          <LocationHost value={location} onChange={value => handleValue('location', value)} />
        )}
        {step === STEPS.INFO && (
          <InfoHost
            guests={guests}
            rooms={rooms}
            bathrooms={bathrooms}
            changeGuests={count => handleValue('guests', count)}
            changeRooms={count => handleValue('rooms', count)}
            changeBathrooms={count => handleValue('bathrooms', count)}
          />
        )}
        {step === STEPS.IMAGES && (
          <ImageHost
            handleUploadImage={value => handleValue('imageUrl', value)}
            imageUrl={imageUrl}
          />
        )}
        {step === STEPS.DESCRIPTION && <DescriptionHost />}
        {step === STEPS.PRICE && <PriceHost />}

        <footer className="container fixed bottom-0 h-20 w-full bg-white border-t border-t-zinc-300 flex items-center justify-between">
          <button
            onClick={onBackStep}
            type="button"
            className="underline font-bold transition-all px-2 py-1 hover:bg-neutral-100 rounded-md"
          >
            Voltar
          </button>
          {step !== STEPS.PRICE
            ? (
            <button
              onClick={onNextStep}
              type="button"
              className="font-semibold bg-zinc-900 px-8 py-3 hover:bg-zinc-950 rounded-md text-white"
            >
              Avançar
            </button>
              )
            : (
            <button
              type="submit"
              className="font-semibold bg-zinc-900 px-8 py-3 hover:bg-zinc-950 rounded-md text-white"
            >
              Concluir
            </button>
              )}
        </footer>
      </form>
    </FormProvider>
  )
}
