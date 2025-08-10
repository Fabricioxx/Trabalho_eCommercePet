# Frontend React Dockerfile (multi-stage)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
# Copia configuração default (pode customizar futuramente)
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
