import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@providers/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.item.findMany();
  }

  async findOne(itemName: string) {
    const item = await this.prisma.item.findUnique({
      where: {
        name: itemName,
      },
    });

    if (!item) throw new NotFoundException();

    return item;
  }
}
