import { Controller, Post, Body } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('api/match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async match(@Body() body: { description?: string }) {
    const { description } = body;
    if (description) {
      return this.matchService.matchByDescription(description);
    }
    else {
      throw new Error('Provide job description');
    }
  }
}