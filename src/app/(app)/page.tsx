import { listingService, ListingsMap } from '@/modules/listings'
import { EmptyState } from '@/modules/core'
import { getLoggedUser } from '@/modules/user'

export default async function Home() {
  const listings = await listingService.getAll()
  const authUser = await getLoggedUser()

  if (listings?.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <div className="container mt-20">
      <ListingsMap data={listings!} authUser={authUser} />
    </div>
  )
}
