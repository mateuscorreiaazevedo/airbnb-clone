interface UserInfo {
  id?: string
  name?: string | null
  email?: string | null
  emailVerified?: Date | string | null
  image?: string | null
  createdAt?: string
  updatedAt?: string
  favoriteIds?: string[]
}
