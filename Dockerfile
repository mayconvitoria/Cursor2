# Build e servem o frontend (para deploy via API Hostinger: clone do repo e docker-compose)
# Não precisa de frontend/dist no repo; o build roda dentro do container.
FROM node:20-alpine AS builder
WORKDIR /app
# Copiar apenas package primeiro (cache de camadas)
COPY frontend/package.json frontend/package-lock.json* ./
# npm ci exige package-lock; se não existir no repo, usa npm install
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY frontend/ ./
# Evitar OOM em VPS com pouca memória; build do Vite
ENV NODE_OPTIONS=--max-old-space-size=1024
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN echo 'server { root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
