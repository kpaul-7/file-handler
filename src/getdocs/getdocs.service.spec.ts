import { Test, TestingModule } from '@nestjs/testing';
import { GetdocsService } from './getdocs.service';

describe('GetdocsService', () => {
  let service: GetdocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetdocsService],
    }).compile();

    service = module.get<GetdocsService>(GetdocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
