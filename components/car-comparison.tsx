"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star, X, Trophy, TrendingUp, TrendingDown } from "lucide-react"
import Image from "next/image"
import type { Car, ComparisonCriteria } from "@/types/car"

interface CarComparisonProps {
  cars: Car[]
  scores: { [key: string]: number }
  onRemoveCar: (carId: string) => void
  criteria: ComparisonCriteria
}

export function CarComparison({ cars, scores, onRemoveCar, criteria }: CarComparisonProps) {
  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucune voiture sélectionnée pour la comparaison</p>
      </div>
    )
  }

  const bestCar = cars.reduce((best, current) => 
    scores[current.id] > scores[best.id] ? current : best
  )

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    if (score >= 40) return "text-orange-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Bon"
    if (score >= 40) return "Moyen"
    return "Faible"
  }

  return (
    <div className="space-y-6">
      {/* Résumé de la comparaison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Résumé de la comparaison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800">Meilleur choix</h3>
              <p className="text-lg font-bold text-green-600">
                {bestCar.brand} {bestCar.model}
              </p>
              <p className="text-sm text-green-700">
                Score: {Math.round(scores[bestCar.id])}/100
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">Prix moyen</h3>
              <p className="text-lg font-bold text-blue-600">
                {Math.round(cars.reduce((sum, car) => sum + car.price, 0) / cars.length).toLocaleString()} €
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800">Consommation moyenne</h3>
              <p className="text-lg font-bold text-purple-600">
                {(cars.reduce((sum, car) => sum + car.consumption, 0) / cars.length).toFixed(1)} L/100km
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tableau de comparaison */}
      <Card>
        <CardHeader>
          <CardTitle>Comparaison détaillée</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Critères</TableHead>
                  {cars.map((car) => (
                    <TableHead key={car.id} className="text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative">
                          <Image
                            src={car.image || "/placeholder.svg"}
                            alt={`${car.brand} ${car.model}`}
                            width={80}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveCar(car.id)}
                            className="absolute -top-2 -right-2 h-6 w-6 p-0 bg-red-500 text-white hover:bg-red-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <div>
                          <p className="font-semibold">{car.brand} {car.model}</p>
                          <p className="text-sm text-gray-600">{car.year}</p>
                        </div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Score IA</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      <div className={`font-bold ${getScoreColor(scores[car.id])}`}>
                        {Math.round(scores[car.id])}/100
                      </div>
                      <div className="text-xs text-gray-600">
                        {getScoreLabel(scores[car.id])}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Prix</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center font-bold">
                      {car.price.toLocaleString()} €
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Consommation</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      {car.consumption} {car.fuelType === "Électrique" ? "kWh" : "L"}/100km
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Puissance</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      {car.power} ch
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Places</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      {car.seats}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fiabilité</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < car.reliability ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm">({car.reliability}/5)</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sécurité</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < car.safety ? "fill-blue-400 text-blue-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm">({car.safety}/5)</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Confort</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < car.comfort ? "fill-green-400 text-green-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm">({car.comfort}/5)</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Carburant</TableCell>
                  {cars.map((car) => (
                    <TableCell key={car.id} className="text-center">
                      <Badge variant="secondary">{car.fuelType}</Badge>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Recommandations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            Recommandations basées sur vos critères
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Pourquoi {bestCar.brand} {bestCar.model} ?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✅ Respecte votre budget de {criteria.budget.toLocaleString()} €</li>
                <li>✅ Correspond à votre priorité : {criteria.priority}</li>
                <li>✅ Adapté à un usage {criteria.usage.toLowerCase()}</li>
                <li>✅ Score de fiabilité : {bestCar.reliability}/5</li>
                <li>✅ Note de sécurité : {bestCar.safety}/5</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
