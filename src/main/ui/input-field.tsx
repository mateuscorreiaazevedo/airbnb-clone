'use client'
import { useFormContext } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import React from 'react'

type Props = React.HtmlHTMLAttributes<HTMLInputElement> & {
  field: string
  label: string
  roundedBotton?: boolean
  roundedTop?: boolean
  rounded?: boolean
  hasPassword?: boolean
  hasNumber?: boolean
  required?: boolean
}

export function InputField(props: Props) {
  const {
    field,
    label,
    rounded = false,
    roundedBotton = false,
    roundedTop = false,
    hasPassword,
    hasNumber,
    required = false,
    ...rest
  } = props
  const [viewPassword, setViewPassword] = React.useState(hasPassword)
  let type = ''

  if (hasPassword) {
    type = viewPassword ? 'password' : 'text'
  } else if (hasNumber) {
    type = 'number'
  } else {
    type = 'text'
  }

  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div className="relative w-fit h-fit">
      <input
        id={field}
        type={type}
        {...register(field, { required })}
        {...rest}
        placeholder=" "
        className={`
        ${errors[field] ? 'border-rose-500 border-2' : 'border border-zinc-400'}
        relative
        peer/input
          -mt-1
          w-field
          pl-4
          pr-10
          h-14
          resize-none
          pt-4
          outline-none
          ${rounded ? 'rounded-lg' : ''}
          ${roundedBotton ? 'rounded-b-lg' : ''}
          ${roundedTop ? 'rounded-t-lg' : ''}
          ${hasNumber ? 'no-arrow' : ''}
          focus:border-rose-500
          focus:border-2
          focus:z-10
        `}
      />
      <label
        htmlFor={field}
        className="
          absolute
          cursor-pointer
          transition-all
          peer-placeholder-shown/input:top-1/2
          peer-placeholder-shown/input:-translate-y-1/2
          peer-placeholder-shown/input:left-5
          peer-placeholder-shown/input:font-semibold
          peer-placeholder-shown/input:text-lg
          peer-focus/input:top-1
          peer-focus/input:z-10
          peer-focus/input:left-3
          peer-focus/input:font-light
          peer-focus/input:text-xs
          peer-focus/input:translate-y-0
          top-1
          left-3
          font-light
          text-xs
          translate-y-0
        "
      >
        {label}
      </label>
      {hasPassword && (
        <label
          htmlFor={field}
          onClick={() => setViewPassword(prev => !prev)}
          className="absolute z-10 right-4 top-1/2 cursor-pointer -translate-y-1/2 text-zinc-500"
          title={viewPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {viewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </label>
      )}
    </div>
  )
}
