# Utilisez l'image officielle Node.js
FROM node:14

# Créez le répertoire de travail
WORKDIR /back

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code source
COPY . .

# Exposez le port sur lequel le serveur Node.js s'exécute
EXPOSE 8081

# Commande pour démarrer l'application
CMD node server.js
