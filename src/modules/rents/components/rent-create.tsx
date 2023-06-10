'use client'

import { FieldValues, useForm } from 'react-hook-form'
import { CategoryRent } from './rent-category'
import { LocationRent } from './rent-location'
import { RentImages } from './rent-images'
import { RentInfo } from './rent-info'
import React from 'react'

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5
}

export default function CreateRent () {
  const [step, setStep] = React.useState(STEPS.CATEGORY)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      categoryId: 0,
      location: null,
      guests: 1,
      rooms: 1,
      bathrooms: 1,
      imageUrl: '',
      price: 1,
      title: '',
      description: ''
    }
  })

  // Fields
  const categoryId = watch('categoryId')
  const location = watch('location')
  const guests = watch('guests')
  const rooms = watch('rooms')
  const bathrooms = watch('bathrooms')
  const imageUrl = watch('imageUrl')

  const handleValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBackStep = () => {
    if (step !== STEPS.CATEGORY) {
      setStep(state => state - 1)
    }
  }

  const onNextStep = () => {
    setStep(state => state + 1)
  }

  return (
    <div className="mt-4 max-w-3xl mx-auto h-full flex flex-col gap-4 justify-center items-center">
      {step === STEPS.CATEGORY && (
        <CategoryRent
          setClick={value => handleValue('categoryId', value)}
          selectedCategory={categoryId}
        />
      )}
      {step === STEPS.LOCATION && (
        <LocationRent
          value={location}
          onChange={value => handleValue('location', value)}
        />
      )}
      {step === STEPS.INFO && (
        <RentInfo
          guests={guests}
          rooms={rooms}
          bathrooms={bathrooms}
          changeGuests={count => handleValue('guests', count)}
          changeRooms={count => handleValue('rooms', count)}
          changeBathrooms={count => handleValue('bathrooms', count)}
        />
      )}
      {step === STEPS.IMAGES && (
        <RentImages
          handleUploadImage={value => handleValue('imageUrl', value)}
          imageUrl={imageUrl}
        />
      )}

      <footer className="container fixed bottom-0 h-20 w-full bg-white border-t border-t-zinc-300 flex items-center justify-between">
        <button
          onClick={onBackStep}
          className="underline font-bold transition-all px-2 py-1 hover:bg-neutral-100 rounded-md"
        >
          Voltar
        </button>
        <button onClick={step !== STEPS.PRICE ? onNextStep : () => { console.log('log') }} className="font-semibold bg-zinc-900 px-8 py-3 hover:bg-zinc-950 rounded-md text-white">
          {step !== STEPS.PRICE ? 'Avançar' : 'Concluir'}
        </button>
      </footer>
    </div>
  )
}
