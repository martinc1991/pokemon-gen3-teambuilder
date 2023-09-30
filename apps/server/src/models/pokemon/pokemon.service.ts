import { Injectable, NotFoundException } from '@nestjs/common';
import { PokemonPaginationDto } from './dto';
import { PrismaService } from '@providers/prisma/prisma.service';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  getAll(pagination: PokemonPaginationDto) {
    return this.prisma.pokemon.findMany({
      orderBy: {
        [pagination.orderBy]: pagination.sortOrder,
      },
      skip: pagination.skip,
      take: pagination.take,
      include: {
        abilities: true,
      },
    });
  }

  async getOne(dexNumber: number) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: {
        nationalPokedexNumber: dexNumber,
      },
      include: {
        typeOne: {
          select: {
            name: true,
          },
        },
        typeTwo: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!pokemon) throw new NotFoundException();

    return pokemon;
  }
}
