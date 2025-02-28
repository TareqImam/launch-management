import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodPacksService } from './food-packs.service';
import { CreateFoodPackDto } from './dto/create-food-pack.dto';
import { UpdateFoodPackDto } from './dto/update-food-pack.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('food-packs')
@ApiTags('Food Packs')
export class FoodPacksController {
  constructor(private readonly foodPacksService: FoodPacksService) {}

  @Post()
  create(@Body() createFoodPackDto: CreateFoodPackDto) {
    return this.foodPacksService.create(createFoodPackDto);
  }

  @Get()
  findAll() {
    return this.foodPacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodPacksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodPackDto: UpdateFoodPackDto,
  ) {
    return this.foodPacksService.update(id, updateFoodPackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodPacksService.remove(id);
  }
}
