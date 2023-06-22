import { prismaDb } from "@/main/config";

class ListingService {
  async getAll() {
    try {

      const response = await prismaDb?.listing.findMany({
        orderBy: { createdAt: 'desc' }
      })

      const listings: Listing[] | undefined = response?.map(item => ({
        ...item,
        createdAt: item.createdAt.toISOString()
      }))

      return listings
    } catch (error) {
      throw new Error(error as any);

    }
  }
}

export const listingService = new ListingService()
