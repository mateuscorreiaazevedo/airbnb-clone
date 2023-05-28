import { toast } from 'react-hot-toast'

type MessageTypeProps = 'success' | 'error' | 'default'

export const setNotification = (message: string, type: MessageTypeProps = 'default') => {
  switch (type) {
    case 'success':
      return toast.success(message)
    case 'error':
      return toast.error(message)
    case 'default':
      return toast(message)
    default:
      return toast(message)
  }
}
