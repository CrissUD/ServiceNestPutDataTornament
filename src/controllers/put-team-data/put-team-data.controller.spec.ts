import { Test, TestingModule } from '@nestjs/testing';
import { PutTeamDataController } from './put-team-data.controller';

describe('PutTeamData Controller', () => {
  let controller: PutTeamDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PutTeamDataController],
    }).compile();

    controller = module.get<PutTeamDataController>(PutTeamDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
