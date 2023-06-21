import { prismaDb } from "@/main/config"

export namespace ListingService {
  export const getAllListings = async () => {
    try {

      const response = await prismaDb?.listing.findMany({
        orderBy: {createdAt: 'desc'}
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
