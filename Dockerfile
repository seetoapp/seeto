# syntax=docker/dockerfile:1

# Production image for SEETO COMMUNICATION LIMITED.
# Builds the TanStack Start app with Nitro's Node server preset.

FROM node:22-bookworm-slim AS deps
WORKDIR /app
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS build
WORKDIR /app
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV VITE_AUTH_ENABLED=false
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NITRO_HOST=0.0.0.0
ENV PORT=8080
ENV NITRO_PORT=8080

RUN groupadd --system seeto \
  && useradd --system --gid seeto --home-dir /app --no-create-home seeto

COPY --from=build --chown=seeto:seeto /app/.output ./.output

USER seeto
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:8080/').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", ".output/server/index.mjs"]
