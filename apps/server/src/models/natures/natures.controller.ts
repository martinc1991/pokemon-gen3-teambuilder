import { Controller, Get, Param } from '@nestjs/common';
import { NatureNames } from '@prisma/client';
import {
  NestControllerInterface,
  TsRest,
  nestControllerContract,
} from '@ts-rest/nest';
import { INaturesContract, naturesContract } from 'contract';
import { NaturesService } from './natures.service';

const c: INaturesContract = nestControllerContract(naturesContract);

@Controller('')
export class NaturesController implements NestControllerInterface<typeof c> {
  constructor(private readonly naturesService: NaturesService) {}

  @TsRest(c.getAll)
  @Get()
  async getAll() {
    const natures = await this.naturesService.findAll();
    return { status: 200 as const, body: natures };
  }

  @TsRest(c.getOne)
  @Get(':natureName')
  async getOne(@Param('natureName') natureName: NatureNames) {
    const item = await this.naturesService.findOne(natureName);
    return { status: 200 as const, body: item };
  }
}
