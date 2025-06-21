"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, RotateCcw } from "lucide-react"
import type { ComparisonCriteria } from "@/types/car"

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void
  onCriteriaChange: (criteria: ComparisonCriteria) => void
}

export function SearchFilters({ onFiltersChange, onCriteriaChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    maxPrice: 100000,
    fuelType: "any",
    favoritesOnly: false,
  })

  const [criteria, setCriteria] = useState<ComparisonCriteria>({
    budget: 50000,
    fuelPreference: "",
    usage: "Mixte",
    priority: "Économie",
    familySize: 4,
  })

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleCriteriaChange = (key: keyof ComparisonCriteria, value: any) => {
    const newCriteria = { ...criteria, [key]: value }
    setCriteria(newCriteria)
    onCriteriaChange(newCriteria)
  }

  const resetFilters = () => {
    const defaultFilters = {
      search: "",
      category: "all",
      maxPrice: 100000,
      fuelType: "any",
      favoritesOnly: false,
    }
    const defaultCriteria: ComparisonCriteria = {
      budget: 50000,
      fuelPreference: "",
      usage: "Mixte",
      priority: "Économie",
      familySize: 4,
    }
    
    setFilters(defaultFilters)
    setCriteria(defaultCriteria)
    onFiltersChange(defaultFilters)
    onCriteriaChange(defaultCriteria)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtres de recherche
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Recherche textuelle */}
        <div className="space-y-2">
          <Label htmlFor="search">Recherche</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Marque, modèle..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filtres de base */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Catégorie</Label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="Citadine">Citadine</SelectItem>
                <SelectItem value="Compacte">Compacte</SelectItem>
                <SelectItem value="Berline">Berline</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Break">Break</SelectItem>
                <SelectItem value="Cabriolet">Cabriolet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Carburant</Label>
            <Select value={filters.fuelType} onValueChange={(value) => handleFilterChange("fuelType", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Tous les carburants</SelectItem>
                <SelectItem value="Essence">Essence</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Hybride">Hybride</SelectItem>
                <SelectItem value="Électrique">Électrique</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Prix maximum */}
        <div className="space-y-2">
          <Label>Prix maximum : {filters.maxPrice.toLocaleString()} €</Label>
          <Slider
            value={[filters.maxPrice]}
            onValueChange={(value) => handleFilterChange("maxPrice", value[0])}
            max={100000}
            min={10000}
            step={1000}
            className="w-full"
          />
        </div>

        {/* Critères de comparaison */}
        <div className="space-y-4">
          <h3 className="font-semibold">Critères de comparaison IA</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Budget : {criteria.budget.toLocaleString()} €</Label>
              <Slider
                value={[criteria.budget]}
                onValueChange={(value) => handleCriteriaChange("budget", value[0])}
                max={100000}
                min={10000}
                step={1000}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label>Usage principal</Label>
              <Select value={criteria.usage} onValueChange={(value) => handleCriteriaChange("usage", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ville">Ville</SelectItem>
                  <SelectItem value="Route">Route</SelectItem>
                  <SelectItem value="Mixte">Mixte</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Priorité</Label>
              <Select value={criteria.priority} onValueChange={(value) => handleCriteriaChange("priority", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Économie">Économie</SelectItem>
                  <SelectItem value="Performance">Performance</SelectItem>
                  <SelectItem value="Confort">Confort</SelectItem>
                  <SelectItem value="Écologie">Écologie</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Nombre de places</Label>
              <Select value={criteria.familySize.toString()} onValueChange={(value) => handleCriteriaChange("familySize", parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 places</SelectItem>
                  <SelectItem value="4">4 places</SelectItem>
                  <SelectItem value="5">5 places</SelectItem>
                  <SelectItem value="7">7 places</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Options spéciales */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={filters.favoritesOnly ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => handleFilterChange("favoritesOnly", !filters.favoritesOnly)}
          >
            {filters.favoritesOnly ? "✓" : "○"} Favoris uniquement
          </Badge>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-2">
          <Button onClick={resetFilters} variant="outline" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Réinitialiser
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
