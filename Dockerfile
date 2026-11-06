# Portfolio: TanStack Start built by Vite + Nitro, served as a standalone Node server.
# Railway builds this file and injects PORT; Nitro listens on HOST:PORT.

# BUILDER
FROM node:24-alpine AS builder
WORKDIR /app

# pnpm comes from the packageManager field of package.json, through corepack.
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# RUNNER
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Nitro bundles the server and its dependencies into .output: no node_modules needed.
COPY --from=builder --chown=node:node /app/.output ./.output

USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
