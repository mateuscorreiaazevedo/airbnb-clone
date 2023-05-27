import dynamic from 'next/dynamic'

export const Popover = dynamic(() => import('./popover'))
export const ListItem = dynamic(() => import('./list-item'))
