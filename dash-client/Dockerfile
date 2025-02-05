# Utilise une image de base Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du client
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du code
COPY . .


# Exposer le port 5173
EXPOSE 5173

# Démarrer le serveur
CMD ["npm", "run", "dev"]
