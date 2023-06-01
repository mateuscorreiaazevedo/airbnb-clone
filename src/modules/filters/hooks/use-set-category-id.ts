import { useCallback } from 'react'

export const useSetCategoryId = (value: string, callback: any) => {
  const categoryIdSearchParams = useCallback(() => {
    const params = new URLSearchParams()
    params.set('category_id', value)

    return params.toString()
  }, [callback])

  return categoryIdSearchParams()
}
