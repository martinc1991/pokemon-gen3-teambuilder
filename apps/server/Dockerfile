FROM node:20-slim AS base

# Needed for prisma
RUN apt-get update -y && apt-get install -y openssl

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Add turbo and prisma globally
RUN pnpm add -g prisma

FROM base as builder

WORKDIR /usr/src/app
COPY . .

# Install dependencies for all apps and packages
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter server... --frozen-lockfile

# Generate prisma client
RUN pnpm prisma:generate

# Build server app and all the packages it depends on 
RUN pnpm --filter server... build

# Creates a portable package from a workspace, copying files and installing dependencies (including dependencies from the workspace)
RUN pnpm deploy --filter=server --prod /usr/src/app/prod/server

# 2. From what we built before, we build both server and web apps
# SERVER
FROM base as server

WORKDIR /usr/src/app

# Copy necessary files generated in the previous step
COPY --chown=node:node --from=builder /usr/src/app/prod/server/dist ./dist
COPY --chown=node:node --from=builder /usr/src/app/prod/server/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/prod/server/prisma ./prisma
COPY --chown=node:node --from=builder /usr/src/app/prod/server/package.json .

# TODO: replace this line by just copying the client generated in the build stage before from node_modules/@prisma
RUN pnpm prisma generate

# Set NODE_ENV to production to optmize performance
ENV NODE_ENV production

EXPOSE 3333

CMD ["pnpm", "start:prod"]

# 3. From the server, we build an image that would run only once to seed the db
# SEEDER
FROM builder as seeder

WORKDIR /usr/src/app

RUN pnpm add ts-node --filter=server

CMD ["pnpm", "db:seed"]
