interface ReservationForm {
  guests: number
  babies?: number
  checkIn: Date | string
  checkOut: Date | string
  totalPrice: number
}

interface Reservation {
  id: string
  startDate: string
  endDate: string
  babies?: number
  guests: number
  userId: string | null
  listingId: string | null
  totalPrice: number
}
