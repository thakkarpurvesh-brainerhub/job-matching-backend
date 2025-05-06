import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';
import { CandidatesModule } from './candidates/candidates.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'job-candidate-matching-system',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JobsModule,
    CandidatesModule,
    MatchModule,
  ],
})
export class AppModule {}