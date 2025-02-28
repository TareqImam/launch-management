import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty()
  voteDate: Date;

  @ApiProperty()
  employeeId: string;

  @ApiProperty()
  foodPackId: string;
}
