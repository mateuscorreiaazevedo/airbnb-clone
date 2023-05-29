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
}

export const userService = new UserService()
