interface ReservationForm {
  userId?: string
  listingId?: string
  guests: number
  babies?: number
  checkIn: Date | string
  checkOut: Date | string
  totalPrice: number
}
