FROM node:20-slim AS base

# Needed for prisma
RUN apt-get update -y && apt-get install -y openssl

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder

# Set working directory
WORKDIR /app
RUN pnpm add -g turbo
COPY . .
RUN turbo prune server --docker

FROM base AS installer
RUN apt-get update
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN pnpm install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

ENV ENV_NAME=dev
ENV PORT=3333
ENV DATABASE_URL=postgresql://postgres:123@pg3t-dev-db:5432/pokemongen3teambuilderdb?schema=public

RUN pnpm prisma:generate

RUN pnpm --filter server... build

FROM base AS server
WORKDIR /app

COPY --from=installer /app .

RUN pnpm prisma:generate

ENV NODE_ENV production

EXPOSE 3333

WORKDIR /app/apps/server

CMD ["pnpm", "start:prod"]