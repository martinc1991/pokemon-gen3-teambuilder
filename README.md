# Pokemon Gen 3 Teambuilder

## How to run

### Local dev environment

Node 20 is required. Also pnpm. Don't forget to make the .env.dev files on apps/db and apps/server (see README on both apps!).

- From the root run `pnpm install`
- From the root run `pnpm prisma:generate`
- From the root run `pnpm dev` (this is going to run web, server, and db apps)
- While the db is still running, still from the root (using another terminal) run `pnpm prisma:migrate` and then run `pnpm db:seed`
- Go to localost:3000

### Server on docker

- From the root run `docker compose up`
- From the root (using another terminal) run `pnpm prisma:migrate:prod` and then run `pnpm db:seed:prod`
- Install dependencies for apps/web and run the app
- Go to localost:3000
