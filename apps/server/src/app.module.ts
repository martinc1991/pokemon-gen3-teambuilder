import { ItemsModule } from '@models/items/items.module';
import { NaturesModule } from '@models/natures/natures.module';
import { PokemonModule } from '@models/pokemon/pokemon.module';
import { TeamModule } from '@models/team/team.module';
import { TypesModule } from '@models/types/types.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@providers/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
