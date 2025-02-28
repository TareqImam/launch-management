import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private prisma: PrismaService) {}

  create(createVoteDto: CreateVoteDto) {
    return this.prisma.vote.create({ data: createVoteDto });
  }

  findAll() {
    return this.prisma.vote.findMany({});
  }

  async findWinner() {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const winner = await this.prisma.vote.groupBy({
      by: ['foodPackId'],
      where: { voteDate: { gte: todayStart, lte: todayEnd } },
      orderBy: {
        _count: {
          foodPackId: 'desc',
        },
      },
      take: 1,
    });

    const winnerFoodPack = await this.prisma.foodPack.findUnique({
      where: { id: winner[0].foodPackId },
      include: {
        restaurant: true,
      },
    });

    return winnerFoodPack.restaurant.name;
  }
}
