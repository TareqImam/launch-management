import { Injectable } from '@nestjs/common';
import { CreateFoodPackDto } from './dto/create-food-pack.dto';
import { UpdateFoodPackDto } from './dto/update-food-pack.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodPacksService {
  constructor(private prsima: PrismaService) {}

  create(createFoodPackDto: CreateFoodPackDto) {
    return this.prsima.foodPack.create({ data: createFoodPackDto });
  }

  findAll() {
    return this.prsima.foodPack.findMany({});
  }

  findOne(id: string) {
    return this.prsima.foodPack.findUnique({ where: { id: id } });
  }

  update(id: string, updateFoodPackDto: UpdateFoodPackDto) {
    return this.prsima.foodPack.update({
      where: { id: id },
      data: updateFoodPackDto,
    });
  }

  remove(id: string) {
    return this.prsima.foodPack.delete({ where: { id: id } });
  }
}
