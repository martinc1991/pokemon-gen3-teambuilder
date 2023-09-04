import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import {
  NestControllerInterface,
  TsRest,
  nestControllerContract,
} from '@ts-rest/nest';
import { IItemsContract, itemsContract } from 'contract';

const c: IItemsContract = nestControllerContract(itemsContract);

@Controller('')
export class ItemsController implements NestControllerInterface<typeof c> {
  constructor(private readonly itemsService: ItemsService) {}

  @TsRest(c.getAll)
  @Get()
  async getAll() {
    const items = await this.itemsService.findAll();
    return { status: 200 as const, body: items };
  }

  @TsRest(c.getOne)
  @Get(':itemName')
  async getOne(@Param('itemName') itemName: string) {
    console.log({ itemName });

    const item = await this.itemsService.findOne(itemName);

    return { status: 200 as const, body: item };
  }
}
