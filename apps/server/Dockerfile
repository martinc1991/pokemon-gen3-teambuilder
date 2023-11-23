FROM node:20-slim AS base

# Needed for prisma
RUN apt-get update -y && apt-get install -y openssl

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN pnpm add -g prisma

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

RUN pnpm prisma:generate && pnpm --filter server... build && pnpm deploy --filter=server --prod /app/deployed/server

FROM base AS server
WORKDIR /app

# Copy necessary files generated in the previous step
COPY --chown=node:node --from=installer /app/deployed/server/dist ./dist
COPY --chown=node:node --from=installer /app/deployed/server/node_modules ./node_modules
COPY --chown=node:node --from=installer /app/deployed/server/prisma ./prisma
COPY --chown=node:node --from=installer /app/deployed/server/package.json .

# COPY --chown=node:node --from=installer /app/deployed/server .

# TODO: replace this line by just copying the client generated in the build stage before from node_modules/@prisma
RUN pnpm prisma generate

# Set NODE_ENV to production to optmize performance
ENV NODE_ENV production

EXPOSE 3333

CMD ["pnpm", "start:prod"]