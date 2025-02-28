import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
