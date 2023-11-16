FROM node:20-slim AS base

# Needed for prisma
RUN apt-get update -y && apt-get install -y openssl

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Add turbo and prisma globally
RUN pnpm add -g turbo prisma

FROM base as builder

WORKDIR /usr/src/app
COPY . .

# Install dependencies for all apps and packages
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Generate prisma client
RUN pnpm prisma:generate

# Build server app and all the packages it depends on 
RUN pnpm --filter ...server build

# Creates a portable package from a workspace, copying files and installing dependencies (including dependencies from the workspace)
RUN pnpm deploy --filter=server /usr/src/app/prod/server

# 2. From what we built before, we build both server and web apps
# SERVER
FROM base as server

WORKDIR /usr/src/app

# Copy dist folder generated in the previous step
COPY --from=builder /usr/src/app/prod/server .

# TODO: aca tengo que hacer correr la app en production mode
# TODO: para eso tengo que hacer pnpm deploy --prod mas arriba (linea 30)
# TODO: y correr la app desde su dist folder
# TODO: como estoy instalando prisma globalmente no deberia tener problemas para correr prisma generate

# TODO: replace this line by just copying the client generated in the build stage before from node_modules/@prisma
RUN pnpm prisma:generate

EXPOSE 3333
CMD ["pnpm", "dev:docker"]

# 3. From the server, we build an image that would run only once to seed the db
# SEEDER
FROM server as seeder

# TODO: aca no deberia copiarme todo el codigo de server, solo lo necesario para la base de datos

WORKDIR /usr/src/app

CMD ["pnpm", "db:seed"]
