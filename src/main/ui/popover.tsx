// Components
import * as Popover from '@radix-ui/react-popover'

// React
import React from 'react'

type Props = {
  button: React.JSX.Element
  children: React.ReactNode
  open: boolean
  setOpen: () => void
}

export default function PopoverUi({ button, children, open, setOpen }: Props) {
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{button}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild>{children}</Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
