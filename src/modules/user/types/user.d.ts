interface UserRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface userLogin {
  email: string
  password: string
}

interface UserInfo {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | string | null
  image: string | null
  createdAt: Date | string
  updatedAt: Date | string
  favoriteIds: string[]
}
