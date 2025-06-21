#!/bin/bash

echo "🚀 Installation de CarIQ - Comparateur de Voitures Intelligent"
echo "================================================================"

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé."
    echo "📦 Installation de Node.js..."
    
    # Vérifier si Homebrew est installé
    if ! command -v brew &> /dev/null; then
        echo "📦 Installation de Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    
    # Installer Node.js
    brew install node
    echo "✅ Node.js installé avec succès !"
else
    echo "✅ Node.js est déjà installé (version $(node --version))"
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé."
    echo "📦 Installation de npm..."
    brew install npm
    echo "✅ npm installé avec succès !"
else
    echo "✅ npm est déjà installé (version $(npm --version))"
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Vérifier l'installation
if [ $? -eq 0 ]; then
    echo "✅ Installation terminée avec succès !"
    echo ""
    echo "🎉 CarIQ est prêt à être lancé !"
    echo ""
    echo "Pour démarrer l'application :"
    echo "  npm run dev"
    echo ""
    echo "Puis ouvrez votre navigateur sur :"
    echo "  http://localhost:3000"
    echo ""
else
    echo "❌ Erreur lors de l'installation des dépendances."
    echo "Essayez de relancer : npm install"
fi 