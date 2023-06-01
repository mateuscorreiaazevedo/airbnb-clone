import React from 'react'

const Login = React.lazy(() => import('./components/modal-login'))
const Register = React.lazy(() => import('./components/modal-register'))
const SignOut = React.lazy(() => import('./components/sign-out'))

export {
  Login,
  Register,
  SignOut
}
