import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodPackDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  restaurantId: string;
}
