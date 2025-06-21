"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "pour toujours",
    description: "Parfait pour commencer",
    features: [
      "Recherche de base",
      "Comparaison de 2 voitures",
      "Scores IA basiques",
      "Favoris limités (5)",
    ],
    popular: false,
    icon: Star,
  },
  {
    name: "Pro",
    price: "9.99€",
    period: "par mois",
    description: "Pour les passionnés d'automobile",
    features: [
      "Recherche avancée",
      "Comparaison illimitée",
      "Scores IA détaillés",
      "Favoris illimités",
      "Assistant IA",
      "Historique complet",
      "Export des données",
    ],
    popular: true,
    icon: Zap,
  },
  {
    name: "Premium",
    price: "19.99€",
    period: "par mois",
    description: "Pour les professionnels",
    features: [
      "Tout du plan Pro",
      "API d'accès",
      "Données en temps réel",
      "Support prioritaire",
      "Analyses avancées",
      "Recommandations personnalisées",
      "Intégrations tierces",
    ],
    popular: false,
    icon: Crown,
  },
]

export function PricingPlans() {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des options adaptées à tous les besoins, de l'utilisateur occasionnel au professionnel
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular
                    ? "border-blue-500 shadow-lg scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Plus populaire
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Gratuit" ? "Commencer" : "Choisir ce plan"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold mb-2">Puis-je changer de plan ?</h3>
              <p className="text-gray-600">
                Oui, vous pouvez changer de plan à tout moment. Les modifications prennent effet immédiatement.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Y a-t-il un engagement ?</h3>
              <p className="text-gray-600">
                Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Les données sont-elles sécurisées ?</h3>
              <p className="text-gray-600">
                Absolument. Nous utilisons les meilleures pratiques de sécurité pour protéger vos données.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Support client disponible ?</h3>
              <p className="text-gray-600">
                Oui, nous offrons un support client réactif pour tous nos utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
