import { images } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

type Props = {
  userAuth?: UserInfo | null
}

export const Avatar: React.FC<Props> = ({ userAuth }) => {
  if (userAuth) {
    return (
      <div className="cursor-pointer">
        {userAuth.image ? (
          <Image
            src={userAuth?.image as string}
            alt=""
            className="w-[30px] aspect-square rounded-full border border-zinc-300"
            width={30}
            height={30}
          />
        ) : (
          <div className="w-[30px] h-[30px] rounded-full border border-zinc-300 bg-zinc-800 text-white flex items-center justify-center text-xs uppercase">
            {userAuth?.name![0]}
          </div>
        )}
      </div>
    )
  }

  return (
    <Image
      src={images.avatarPlaceholder}
      alt=""
      className="w-[30px] cursor-pointer aspect-square rounded-full border border-zinc-300"
      width={30}
      height={30}
    />
  )
}
