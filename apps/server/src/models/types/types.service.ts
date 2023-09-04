import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';
import { TypeNames } from '@prisma/client';

@Injectable()
export class TypesService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.type.findMany();
  }

  async findOneByName(typeName: TypeNames) {
    const type = await this.prisma.type.findUnique({
      where: {
        name: typeName,
      },
    });

    if (!type) throw new NotFoundException();

    return type;
  }
}
