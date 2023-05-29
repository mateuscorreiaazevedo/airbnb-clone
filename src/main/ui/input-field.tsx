// Utils
import { useFormContext } from 'react-hook-form'
// React
import React from 'react'
import { Eye, EyeOff } from 'lucide-react'

type Props = React.HtmlHTMLAttributes<HTMLInputElement> & {
  field: string
  label: string
  roundedBotton?: boolean
  roundedTop?: boolean
  rounded?: boolean
  hasPassword?: boolean
}

export function InputField (props: Props) {
  const {
    field,
    label,
    rounded = false,
    roundedBotton = false,
    roundedTop = false,
    hasPassword,
    ...rest
  } = props
  const [viewPassword, setViewPassword] = React.useState(hasPassword)

  const { register } = useFormContext()

  return (
    <div className="relative w-fit h-fit">
      <input
        id={field}
        type={viewPassword ? 'password' : 'text'}
        {...register(field)}
        {...rest}
        placeholder=" "
        className={`
        relative
        peer/input
          -mt-1
          w-field
          pl-4
          pr-10
          h-14
          pt-4
          border
          outline-none
          border-zinc-400
          ${rounded ? 'rounded-lg' : ''}
          ${roundedBotton ? 'rounded-b-lg' : ''}
          ${roundedTop ? 'rounded-t-lg' : ''}
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
          top-1
          left-3
          font-light
          text-xs
        "
      >
        {label}
      </label>
      {hasPassword && (
        <span
          onClick={() => setViewPassword(prev => !prev)}
          className="absolute z-10 right-4 top-1/2 cursor-pointer -translate-y-1/2 text-zinc-500"
          title={viewPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {viewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </span>
      )}
    </div>
  )
}
