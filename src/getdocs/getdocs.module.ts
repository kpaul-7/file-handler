import { Module } from '@nestjs/common';
import { GetdocsService } from './getdocs.service';
import { GetdocsController } from './getdocs.controller';

@Module({
  controllers: [GetdocsController],
  providers: [GetdocsService],
})
export class GetdocsModule {}
