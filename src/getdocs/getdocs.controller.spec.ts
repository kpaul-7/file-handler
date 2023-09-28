import { Test, TestingModule } from '@nestjs/testing';
import { GetdocsController } from './getdocs.controller';
import { GetdocsService } from './getdocs.service';

describe('GetdocsController', () => {
  let controller: GetdocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetdocsController],
      providers: [GetdocsService],
    }).compile();

    controller = module.get<GetdocsController>(GetdocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
