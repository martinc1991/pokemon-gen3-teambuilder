import { Injectable } from '@nestjs/common';
import { NatureNames } from '@prisma/client';
import { PrismaService } from '@providers/prisma/prisma.service';

@Injectable()
export class NaturesService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.nature.findMany();
  }

  findOne(natureName: NatureNames) {
    return this.prisma.nature.findUniqueOrThrow({
      where: {
        name: natureName,
      },
    });
  }
}
