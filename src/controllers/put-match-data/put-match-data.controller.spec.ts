import { Test, TestingModule } from '@nestjs/testing';
import { PutMatchDataController } from './put-match-data.controller';

describe('PutMatchData Controller', () => {
  let controller: PutMatchDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PutMatchDataController],
    }).compile();

    controller = module.get<PutMatchDataController>(PutMatchDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
