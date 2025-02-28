import { Test, TestingModule } from '@nestjs/testing';
import { FoodPacksService } from './food-packs.service';

describe('FoodPacksService', () => {
  let service: FoodPacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodPacksService],
    }).compile();

    service = module.get<FoodPacksService>(FoodPacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
