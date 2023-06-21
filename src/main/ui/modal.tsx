// Components
import * as Dialog from '@radix-ui/react-dialog'

// React
import React from 'react'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  toggleOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal (props: Props) {
  const { children, isOpen, toggleOpenChange } = props

  return (
    <Dialog.Root open={isOpen} onOpenChange={toggleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content asChild>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
