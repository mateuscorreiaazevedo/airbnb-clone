export const formattersHelper = {
  formatMoney: (value: number) => {
    const money = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return money.format(value)
  }
}
