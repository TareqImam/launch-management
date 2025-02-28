import { Module } from '@nestjs/common';
import { FoodPacksService } from './food-packs.service';
import { FoodPacksController } from './food-packs.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FoodPacksController],
  providers: [FoodPacksService],
  imports: [PrismaModule],
  exports: [FoodPacksService],
})
export class FoodPacksModule {}
