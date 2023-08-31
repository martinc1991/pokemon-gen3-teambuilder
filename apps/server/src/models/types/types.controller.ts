import { Controller, Get, Param } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypeNames } from '@prisma/client';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @Get(':typeName')
  findOne(@Param('typeName') typeName: TypeNames) {
    return this.typesService.findOneByName(typeName);
  }
}
