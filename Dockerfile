# Build Stage
FROM node:22.16.0 AS build
LABEL maintainer="https://zbhavyai.github.io"
LABEL repo="https://github.com/zbhavyai/zbhavyai.github.io"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN CI=false npm run build

# Runtime Stage
FROM nginx:1.28.0
LABEL maintainer="https://zbhavyai.github.io"
LABEL repo="https://github.com/zbhavyai/zbhavyai.github.io"
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

