import { PokemonService } from '@models/pokemon/pokemon.service';
import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from '@providers/trpc/trpc.service';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly pokemonService: PokemonService,
  ) {}

  appRouter = this.trpc.router({
    hello: this.trpc.procedure
      .input(
        z.object({
          dexNumber: z.number(),
        }),
      )
      .query(async ({ input: { dexNumber } }) => {
        const pokemon = await this.pokemonService.getOne(dexNumber);
        return pokemon;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: this.appRouter,
      }),
    );
  }
}

export type AppRouter = TrpcRouter[`appRouter`];
