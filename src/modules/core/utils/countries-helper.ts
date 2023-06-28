import countries from 'world-countries'

const formattedCountries: Country[] = countries.map(country => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region
}))

export const countriesHelper = {
  getAll: () => formattedCountries,
  getByValue: (value: string) => formattedCountries.find(item => item.value === value)
}
