'use client'

import { countriesHelper } from '@/modules/core'
import Select from 'react-select'
import React from 'react'

type Props = {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
}

export const RentLocationSelect: React.FC<Props> = ({ onChange, value }) => {
  const getAll = countriesHelper.getAll()

  return (
    <div className='w-full animate-slide-up flex flex-col gap-4'>
      <Select
        placeholder='Todos os países'
        isClearable
        options={getAll}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={theme => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: '#FF385C',
            primary25: '#ffe4e6',
            primary50: 'black'
          }
        })}
        value={value}
        onChange={value => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className='flex flex-row items-center gap-3'>
            <div className='font-semibold'>
              {option.label},{' '}
              <span className='font-light text-neutral-400'>{option.region}</span>
            </div>
          </div>
        )}
      />

    </div>
  )
}
