import { Injectable } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';
import { TypeNames } from '@prisma/client';

@Injectable()
export class TypesService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.type.findMany();
  }

  findOneByName(typeName: TypeNames) {
    return this.prisma.type.findUniqueOrThrow({
      where: {
        name: typeName,
      },
    });
  }
}
