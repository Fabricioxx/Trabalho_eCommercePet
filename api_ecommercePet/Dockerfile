FROM node:18-alpine
WORKDIR /app

# Copia manifestos e instala apenas prod (pode trocar para npm ci se lock existir)
COPY package*.json ./
RUN npm install --production

# Copia restante do código
COPY . .

ENV NODE_ENV=production \
    PORT=3001

EXPOSE 3001
CMD ["node","bin/www"]
