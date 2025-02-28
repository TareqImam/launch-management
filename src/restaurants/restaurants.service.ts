import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  create(createRestaurantDto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({ data: createRestaurantDto });
  }

  findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        foodPacks: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.restaurant.findUnique({ where: { id: id } });
  }

  update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id: id },
      data: updateRestaurantDto,
    });
  }

  async remove(id: string) {
    const deleteFoodPacks = this.prisma.foodPack.deleteMany({
      where: { restaurantId: id },
    });
    const deleteRestaurants = this.prisma.restaurant.delete({
      where: { id: id },
    });

    const transaction = await this.prisma.$transaction([
      deleteFoodPacks,
      deleteRestaurants,
    ]);

    return transaction;
  }
}
