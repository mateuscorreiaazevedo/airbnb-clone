import dayjs from 'dayjs'

export function rangeDates(startDate: string | Date, endDate: string | Date) {
  const dates = []
  const finalDate = dayjs(endDate)
  let actualDate = dayjs(startDate)

  while (actualDate.isBefore(finalDate)) {
    dates.push(actualDate.format('DD/MM/YY'))
    actualDate = actualDate.add(1, 'day')
  }
  dates.push(finalDate.format('DD/MM/YY'))

  return dates
}
