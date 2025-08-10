# Backend API Dockerfile
FROM node:18-alpine
WORKDIR /app

# Instala dependências
COPY api_ecommercePet/package*.json ./
RUN npm install --production

# Copia código
COPY api_ecommercePet .

ENV NODE_ENV=production \
    PORT=3001

EXPOSE 3001
CMD ["node","bin/www"]
