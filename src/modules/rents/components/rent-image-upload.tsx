'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { ImagePlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

declare global {
  // eslint-disable-next-line no-var
  var cloudinary: any
}

interface ImageProps {
  onChange: (value: string) => void
  value: string
}

export const RentImageUpload: React.FC<ImageProps> = ({ onChange, value }) => {
  const handleUpload = React.useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="tg3hdzx0"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open()}
            className='relative w-full h-full md:h-[60vh] cursor-pointer hover:opacity-70 transition-all border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400'
          >
            <ImagePlus size={48} />
            <span className='font-semibold text-lg'>
              Clique aqui para inserir uma foto.
            </span>
            {value && (
              <div
                className='absolute inset-0 w-full h-full'
              >
                <Image
                  alt='Upload'
                  fill
                  className='w-full aspect-auto object-cover md:object-contain'
                  src={value}
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}
