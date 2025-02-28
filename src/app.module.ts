import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { FoodPacksModule } from './food-packs/food-packs.module';
import { EmployeesModule } from './employees/employees.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    PrismaModule,
    RestaurantsModule,
    FoodPacksModule,
    EmployeesModule,
    VotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
