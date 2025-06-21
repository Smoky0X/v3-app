export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  subscription?: {
    type: string
    status: string
    expiresAt?: Date
  }
  preferences?: {
    budget: number
    fuelPreference: string
    usage: string
    priority: string
    familySize: number
  }
  favorites?: string[]
  history?: string[]
  createdAt: string
}

export interface UserPreferences {
  favoriteCategories: string[]
  budgetRange: [number, number]
  preferredFuelTypes: string[]
  notifications: {
    priceAlerts: boolean
    newModels: boolean
    recommendations: boolean
  }
}

export interface SubscriptionPlan {
  type: "free" | "premium" | "pro"
  name: string
  price: number
  features: string[]
  comparisonsLimit: number
  favoritesLimit: number
  alertsLimit: number
  expiresAt?: string
}

export interface SavedComparison {
  id: string
  name: string
  cars: string[]
  criteria: any
  createdAt: string
  userId: string
}

export interface PriceAlert {
  id: string
  carId: string
  targetPrice: number
  currentPrice: number
  isActive: boolean
  createdAt: string
  userId: string
}
