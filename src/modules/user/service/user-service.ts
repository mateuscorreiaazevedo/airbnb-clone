import { service } from '@/modules/core'

class UserService {
  async register ({ email, name, password, confirmPassword }: UserRegister) {
    const response = await service.request<{ message: string; error?: string }>({
      url: '/register',
      data: {
        email,
        name,
        password,
        confirmPassword
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post'
    })

    switch (response.statusCode) {
      case 201:
        return response.body.message
      case 422:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no servidor.')
    }
  }

  async login ({ email, password }: userLogin) {
    const response = await service.request<{ user: UserInfo; error?: string }>({
      url: '/login',
      data: {
        email,
        password,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post'
    })

    switch (response.statusCode) {
      case 201:
        return response.body
      case 404:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
    }
  }
}

export const userService = new UserService()
