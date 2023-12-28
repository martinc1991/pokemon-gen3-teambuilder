import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';
import { TypeNames } from 'contract';
import { PokemonPaginationDto } from './dto';

@Injectable()
export class PokemonService {
  constructor(private prisma: PrismaService) {}

  getAll(pagination: PokemonPaginationDto) {
    const typesArr: TypeNames[] = [];

    if (pagination.typeOne) typesArr.push(pagination.typeOne);
    if (pagination.typeTwo) typesArr.push(pagination.typeTwo);

    const typesFilter =
      typesArr.length === 1
        ? { OR: [{ typeOneName: { in: typesArr } }, { typeTwoName: { in: typesArr } }] }
        : typesArr.length === 2
        ? { AND: [{ typeOneName: { in: typesArr } }, { typeTwoName: { in: typesArr } }] }
        : {};

    return this.prisma.pokemon.findMany({
      orderBy: { [pagination.orderBy]: pagination.sortOrder },
      skip: pagination.skip,
      take: pagination.take,
      include: { abilities: true },
      where: typesFilter,
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
        learnset: true,
        abilities: true,
      },
    });

    if (!pokemon) throw new NotFoundException();

    return pokemon;
  }
}
