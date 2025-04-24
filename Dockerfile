# Étape 1 : Utiliser une image Node.js pour construire l'application
FROM node:18.19 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port utilisé par Angular (par défaut 4200)
EXPOSE 4200

# Commande par défaut pour démarrer l'application avec ng serve
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
