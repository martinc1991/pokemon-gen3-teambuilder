import { Module } from '@nestjs/common';
import { NaturesController } from './natures.controller';
import { NaturesService } from './natures.service';

@Module({
  controllers: [NaturesController],
  providers: [NaturesService],
})
export class NaturesModule {}
