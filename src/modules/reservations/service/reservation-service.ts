import MyReservations from "@/app/(app)/trips/page";
import { prismaDb } from "@/main/config";
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

  async getAllByUser(userId: string): Promise<Reservation[] | undefined> {
    const myReservations = await prismaDb?.reservation.findMany({
      where: {
        userId
      }
    })

    return myReservations?.map(item => ({
      ...item,
      createdAt: item.createdAt.toISOString(),
      startDate: item.startDate.toISOString(),
      endDate: item.endDate.toISOString(),
    }))
  }
}

export const reservationService = new ReservationService()
