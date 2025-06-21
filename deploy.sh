#!/bin/bash

echo "🚀 Préparation du déploiement CarIQ sur Vercel"
echo "=============================================="

# Vérifier que git est installé
if ! command -v git &> /dev/null; then
    echo "❌ Git n'est pas installé. Installez-le d'abord."
    exit 1
fi

# Initialiser git si pas déjà fait
if [ ! -d ".git" ]; then
    echo "📁 Initialisation de Git..."
    git init
fi

# Ajouter tous les fichiers
echo "📦 Ajout des fichiers..."
git add .

# Commit
echo "💾 Commit des changements..."
git commit -m "🚀 CarIQ - App de comparaison de voitures avec IA"

# Demander l'URL du repository
echo ""
echo "🌐 Entrez l'URL de votre repository GitHub :"
echo "   Exemple: https://github.com/votre-username/cariq-app.git"
read -p "URL: " repo_url

# Configurer le remote
echo "🔗 Configuration du remote..."
git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

# Pousser sur GitHub
echo "📤 Push vers GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Code poussé sur GitHub !"
echo ""
echo "🎯 Prochaines étapes :"
echo "1. Allez sur https://vercel.com"
echo "2. Créez un compte (avec GitHub)"
echo "3. Cliquez 'New Project'"
echo "4. Importez votre repository"
echo "5. Cliquez 'Deploy'"
echo ""
echo "🎉 Votre CarIQ sera en ligne en quelques minutes !" 