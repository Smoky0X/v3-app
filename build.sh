#!/bin/bash

echo "🚀 Build de CarIQ pour Vercel"
echo "=============================="

# Nettoyer les caches
echo "🧹 Nettoyage des caches..."
rm -rf .next
rm -rf node_modules/.cache

# Installer les dépendances avec legacy-peer-deps
echo "📦 Installation des dépendances..."
npm install --legacy-peer-deps

# Build de production
echo "🔨 Build de production..."
npm run build

# Vérifier le build
if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    echo "📁 Fichiers générés dans .next/"
else
    echo "❌ Erreur lors du build"
    exit 1
fi 