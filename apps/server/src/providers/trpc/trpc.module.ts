import { PokemonService } from '@models/pokemon/pokemon.service';
import { Module } from '@nestjs/common';
import { TrpcRouter } from './trpc.router';
import { TrpcService } from './trpc.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, PokemonService],
})
export class TrpcModule {}
