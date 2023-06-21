import React from 'react'

const Login = React.lazy(() => import('./components/modal-login'))
const Register = React.lazy(() => import('./components/modal-register'))
const SignOut = React.lazy(() => import('./components/sign-out'))

export * from './hooks/use-register-modal'
export * from './hooks/use-login-modal'

export {
  Login,
  Register,
  SignOut
}
