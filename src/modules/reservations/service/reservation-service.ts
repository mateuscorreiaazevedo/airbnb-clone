import { service } from "@/modules/core";

class ReservationService {
  async newReservation(data: ReservationForm, listingId: string) {
    const { body, statusCode } = await service.request<{ message: string, error?: string }>({
      url: `/reservation/${listingId}/new`,
      method: 'post',
      data
    })

    switch (statusCode) {
      case 200:
        return body.message
      case 401:
        throw new Error(body.error)
      case 422:
        throw new Error(body.error)
      default:
        throw new Error("Erro inesperado no servidor. Por favor, tente novamente mais tarde")
    }
  }
}

export const reservationService = new ReservationService()
