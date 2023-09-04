import { Controller, Get, Param } from '@nestjs/common';
import { TypeNames } from '@prisma/client';
import {
  NestControllerInterface,
  TsRest,
  nestControllerContract,
} from '@ts-rest/nest';
import { ITypesContract, typesContract } from 'contract';
import { TypesService } from './types.service';

// @Controller('types')
// export class TypesController {
//   constructor(private readonly typesService: TypesService) {}

//   @Get()
//   findAll() {
//     return this.typesService.findAll();
//   }

//   @Get(':typeName')
//   findOne(@Param('typeName') typeName: TypeNames) {
//     return this.typesService.findOneByName(typeName);
//   }
// }

const c: ITypesContract = nestControllerContract(typesContract);
// type RequestShapes = NestRequestShapes<typeof c>;

@Controller('')
export class TypesController implements NestControllerInterface<typeof c> {
  constructor(private readonly typesService: TypesService) {}

  @TsRest(c.getAll)
  @Get()
  async getAll() {
    const types = await this.typesService.findAll();

    return { status: 200 as const, body: types };
  }

  @TsRest(c.getOne)
  @Get(':typeName')
  async getOne(@Param('typeName') typeName: TypeNames) {
    const type = await this.typesService.findOneByName(typeName);

    return {
      status: 200 as const,
      body: type,
    };
  }
}
