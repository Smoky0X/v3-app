export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  fuelType: string
  consumption: number
  power: number
  seats: number
  category: string
  reliability: number
  safety: number
  comfort: number
  image: string
  features: string[]
  pros: string[]
  cons: string[]
}

export interface ComparisonCriteria {
  budget: number
  fuelPreference: string
  usage: string
  priority: string
  familySize: number
}
