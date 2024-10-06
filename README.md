# DubbingDub Frontend

## À propos du projet

DubbingDub est une plateforme web innovante conçue pour simplifier et optimiser le processus de doublage dans l'industrie cinématographique. Cette application met en relation les maisons de production, les directeurs artistiques et les doubleurs, offrant une solution complète pour la gestion des projets de doublage.

L'application est développée avec Vue 3 et utilise Tailwind CSS pour le style, offrant une interface utilisateur moderne et réactive.
## Prérequis

- Node.js (version 14.x ou supérieure)
- npm (normalement inclus avec Node.js)

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```
   git clone [URL_DU_REPO]
   ```

2. Naviguez dans le dossier du projet :
   ```
   cd doublage-app
   ```

3. Installez les dépendances :
   ```
   npm install
   ```

## Configuration

1. Copiez le fichier `.env.example` en `.env` :
   ```
   cp .env.example .env
   ```

2. Modifiez le fichier `.env` avec vos propres paramètres, notamment l'URL de l'API.

## Lancement de l'application en mode développement

Pour lancer l'application en mode développement, exécutez :

```
npm run serve
```

L'application sera accessible à l'adresse `http://localhost:8080` (ou un autre port si le 8080 est déjà utilisé).

## Construction pour la production

Pour construire l'application pour la production, exécutez :

```
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.


## Fonctionnalités actuelles

- **Authentification des utilisateurs** :
  - Connexion sécurisée à l'application
  - Déconnexion de l'application

## Fonctionnalités à venir

- **Gestion des utilisateurs** :
  - Inscription des nouveaux utilisateurs
  - Visualisation et mise à jour du profil utilisateur

- **Gestion des films** :
  - Ajout de nouveaux films par les maisons de production
  - Consultation de la liste des films disponibles
  - Visualisation des détails d'un film spécifique
  - Modification et suppression des films

- **Gestion des rôles** :
  - Ajout de rôles à doubler pour chaque film
  - Consultation des rôles disponibles pour un film

- **Système de candidature** :
  - Soumission de candidatures par les directeurs artistiques pour les projets de doublage
  - Consultation des candidatures reçues par les maisons de production
  - Mise à jour du statut des candidatures

- **Gestion des contrats** :
  - Création de contrats pour les doubleurs
  - Consultation des contrats existants

## Structure du projet

- `src/api/`: Configuration d'Axios pour les requêtes HTTP.
- `src/assets/`: Fichiers statiques comme les styles CSS.
- `src/components/`: Composants Vue réutilisables.
- `src/config/`: Fichiers de configuration, comme les paramètres de l'API.
- `src/router/`: Configuration du routeur Vue.
- `src/services/`: Services pour interagir avec l'API.
- `src/store/`: Modules Vuex pour la gestion de l'état.
- `src/views/`: Composants Vue pour les différentes pages de l'application.