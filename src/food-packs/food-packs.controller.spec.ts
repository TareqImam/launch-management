import { Test, TestingModule } from '@nestjs/testing';
import { FoodPacksController } from './food-packs.controller';
import { FoodPacksService } from './food-packs.service';

describe('FoodPacksController', () => {
  let controller: FoodPacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodPacksController],
      providers: [FoodPacksService],
    }).compile();

    controller = module.get<FoodPacksController>(FoodPacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
