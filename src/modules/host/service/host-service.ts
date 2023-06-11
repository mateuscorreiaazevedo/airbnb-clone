import { service } from '@/modules/core'

class HostService {
  async createHost (data: HostServiceForm) {
    const response = await service.request<{ error?: string; message: string }>({
      url: '/host/create',
      method: 'post',
      data
    })

    switch (response.statusCode) {
      case 201:
        return response.body.message
      case 401:
        throw new Error(response.body?.error)
      case 422:
        throw new Error(response.body?.error)
      default:
        throw new Error('Erro no servidor. Por favor, tente novamente mais tarde.')
    }
  }
}

export const hostService = new HostService()
