import { Controller, Get, Post, Body } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('votes')
@ApiTags('Votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get('/winner')
  findWinner() {
    return this.votesService.findWinner();
  }
}
