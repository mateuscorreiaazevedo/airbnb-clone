import { Variants } from 'framer-motion'

export const slideUpContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: 'keyframes'
    }
  }
}

export const slideUpItem: Variants = {
  hidden: {
    y: 26,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}
