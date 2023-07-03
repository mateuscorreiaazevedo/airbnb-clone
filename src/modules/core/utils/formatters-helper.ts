import dayjs from "dayjs"

export const formattersHelper = {
  formatMoney: (value: number) => {
    const money = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return money.format(value)
  },
  formatDate: {
    extend: (value: string | Date) => {
      const formattedDate = dayjs(value).format('DD [de] MMM [de] YYYY')
      return formattedDate
    }
  }
}
