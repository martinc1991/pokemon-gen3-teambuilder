import { Injectable } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(itemName: string) {
    return this.prisma.item.findUniqueOrThrow({
      where: {
        name: itemName,
      },
    });
  }
}
