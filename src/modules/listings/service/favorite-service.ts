import { service } from "@/modules/core";
import axios from "axios";

class FavoriteService {

  async toggle (listingId: string) {
    const response = await service.request<{message: string, error?: string}>({
      url: `/favorite/${listingId}`,
      method: 'put'
    })

    switch (response.statusCode) {
      case 200: return response.body.message
      case 401: throw new Error(response.body.error)
      default: throw new Error("Erro no servidor. Por favor, tente novamente mais tarde.");

    }

  }
}

export const favoriteService = new FavoriteService()
