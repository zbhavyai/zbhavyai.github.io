# Build Stage
FROM docker.io/library/node:22.16.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN CI=false npm run build

# Runtime Stage
FROM docker.io/library/nginx:1.28.0
LABEL org.opencontainers.image.title="zbhavyai.github.io"
LABEL org.opencontainers.image.description="Bhavyai's personal website"
LABEL org.opencontainers.image.source="https://github.com/zbhavyai/zbhavyai.github.io"
LABEL org.opencontainers.image.licenses="AGPL-3.0"
LABEL org.opencontainers.image.authors="Bhavyai Gupta <https://zbhavyai.github.io>"
LABEL org.opencontainers.image.version="1.0.0"
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
