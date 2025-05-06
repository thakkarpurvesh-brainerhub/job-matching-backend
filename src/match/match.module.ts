// src/match/match.module.ts
import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { JobsModule } from '../jobs/jobs.module';
import { CandidatesModule } from '../candidates/candidates.module';

@Module({
  imports: [JobsModule, CandidatesModule],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {}