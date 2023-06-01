
interface UserInfo {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | string | null
  image: string | null
  createdAt: string | string
  updatedAt: string | string
  favoriteIds: string[]
}
