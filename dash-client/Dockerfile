# Utilise une image de base Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du client
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Construire l'application React
RUN npm run build

# Installer un serveur web pour servir les fichiers (serveur Nginx par exemple)
RUN npm install -g serve

# Exposer le port 5173
EXPOSE 5173

# Démarrer le serveur
CMD ["serve", "-s", "dist"]
