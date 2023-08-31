import { Controller, Get, Param } from '@nestjs/common';
import { NatureNames } from '@prisma/client';
import { NaturesService } from './natures.service';

@Controller('natures')
export class NaturesController {
  constructor(private readonly naturesService: NaturesService) {}

  @Get()
  findAll() {
    return this.naturesService.findAll();
  }

  @Get(':natureName')
  findOne(@Param('natureName') natureName: NatureNames) {
    return this.naturesService.findOne(natureName);
  }
}
