# CarIQ - Comparateur de Voitures Intelligent

CarIQ est une application web moderne qui utilise l'intelligence artificielle pour vous aider à trouver la voiture parfaite selon vos besoins, votre budget et vos préférences.

## 🚀 Fonctionnalités

- **Recherche intelligente** : Filtrez les voitures selon vos critères
- **Comparaison détaillée** : Comparez jusqu'à 4 voitures côte à côte
- **Scoring IA** : Chaque voiture reçoit un score personnalisé basé sur vos préférences
- **Assistant IA** : Chatbot intelligent pour vous guider
- **Gestion des favoris** : Sauvegardez vos voitures préférées
- **Interface moderne** : Design responsive et intuitif

## 🛠️ Installation

### Prérequis

1. **Node.js** (version 18 ou supérieure)
2. **Git** (pour cloner le projet)

### Étapes d'installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd car-comparator
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du projet

```
car-comparator/
├── app/                    # Pages Next.js (App Router)
├── components/             # Composants React
│   ├── ui/                # Composants UI de base
│   ├── ai/                # Composants IA
│   ├── auth/              # Composants d'authentification
│   └── layout/            # Composants de mise en page
├── data/                  # Données des voitures
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires et configurations
├── types/                 # Types TypeScript
├── utils/                 # Fonctions utilitaires
└── public/                # Assets statiques
```

## 🎯 Utilisation

### Recherche de voitures
1. Utilisez les filtres pour affiner votre recherche
2. Ajustez vos critères de comparaison (budget, usage, etc.)
3. Consultez les scores IA pour chaque voiture

### Comparaison
1. Sélectionnez jusqu'à 4 voitures à comparer
2. Consultez le tableau de comparaison détaillé
3. Analysez les différences en termes de prix, consommation, fiabilité

### Assistant IA
1. Cliquez sur le bouton flottant en bas à droite
2. Posez vos questions sur les voitures
3. Recevez des recommandations personnalisées

## 🚀 Déploiement

### Déploiement sur Vercel (Recommandé)

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Créez un compte gratuit

2. **Connecter votre repository**
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js

3. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en quelques minutes

### Déploiement manuel

1. **Build de production**
   ```bash
   npm run build
   ```

2. **Lancer en production**
   ```bash
   npm start
   ```

## 🛠️ Technologies utilisées

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS, Radix UI
- **Icons** : Lucide React
- **State Management** : React Hooks
- **Deployment** : Vercel

## 📊 Données

L'application utilise des données de voitures fictives pour la démonstration. Dans une version production, ces données proviendraient d'une API réelle.

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que Node.js est installé : `node --version`
2. Vérifiez que npm est installé : `npm --version`
3. Supprimez le dossier `node_modules` et relancez `npm install`
4. Consultez les logs d'erreur dans la console

## 🎉 Merci !

Merci d'utiliser CarIQ ! N'hésitez pas à nous faire part de vos suggestions d'amélioration. 