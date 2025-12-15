import { Test, TestingModule } from '@nestjs/testing';
import { LionController } from './lion.controller';

describe('LionController', () => {
  let controller: LionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LionController],
    }).compile();

    controller = module.get<LionController>(LionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
