export interface SubscriptionPlan {
  type: string
  name: string
  price: number
  features: string[]
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    type: "free",
    name: "Gratuit",
    price: 0,
    features: [
      "Recherche de base",
      "Comparaison de 2 voitures",
      "Scores IA basiques",
      "Favoris limités (5)"
    ]
  },
  {
    type: "premium",
    name: "Premium",
    price: 9.99,
    features: [
      "Recherche avancée",
      "Comparaison illimitée",
      "Scores IA détaillés",
      "Favoris illimités",
      "Assistant IA",
      "Historique complet",
      "Export des données"
    ]
  },
  {
    type: "pro",
    name: "Pro",
    price: 19.99,
    features: [
      "Tout du plan Premium",
      "API d'accès",
      "Données en temps réel",
      "Support prioritaire",
      "Analyses avancées",
      "Recommandations personnalisées",
      "Intégrations tierces"
    ]
  }
]
