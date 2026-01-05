# build stage
FROM docker.io/library/node:24-slim AS build
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# runtime stage
FROM docker.io/library/nginx:1.29-alpine
ARG COMMIT_SHA
LABEL org.opencontainers.image.title="zbhavyai.github.io"
LABEL org.opencontainers.image.description="Bhavyai's personal website"
LABEL org.opencontainers.image.source="https://github.com/zbhavyai/zbhavyai.github.io"
LABEL org.opencontainers.image.licenses="AGPL-3.0"
LABEL org.opencontainers.image.authors="Bhavyai Gupta <https://zbhavyai.github.io>"
LABEL org.opencontainers.image.version="${COMMIT_SHA}"
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
