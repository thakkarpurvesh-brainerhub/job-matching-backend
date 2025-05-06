import { Controller, Post, Body } from '@nestjs/common';
import { CandidatesService } from './candidates.service';

@Controller('api/candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post()
  create(@Body() body: { name: string; summary: string }) {
    const { name, summary } = body;
    return this.candidatesService.createCandidate(name, summary);
  }
}