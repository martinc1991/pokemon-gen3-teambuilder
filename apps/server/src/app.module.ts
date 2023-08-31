import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrpcModule } from '@providers/trpc/trpc.module';
import { PrismaModule } from '@providers/prisma/prisma.module';
import { PokemonModule } from '@models/pokemon/pokemon.module';
import { TeamModule } from '@models/team/team.module';
import { TypesModule } from '@models/types/types.module';
import { NaturesModule } from '@models/natures/natures.module';
import { ItemsModule } from '@models/items/items.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    PokemonModule,
    TeamModule,
    TypesModule,
    NaturesModule,
    ItemsModule,
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
