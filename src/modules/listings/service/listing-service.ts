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

  async getyById(id: string) {
    const response = await prismaDb?.listing.findUnique({
      where: {
        id
      },
      include: {
        user: true
      }
    })

    return {
      ...response,
      createdAt: response?.createdAt.toISOString(),
      user: {
        ...response?.user,
        createdAt: response?.user.createdAt.toISOString(),
        updatedAt: response?.user.updatedAt.toISOString(),
        emailVerified: response?.user.emailVerified?.toISOString() || null
      }
    }
  }
}

export const listingService = new ListingService()
