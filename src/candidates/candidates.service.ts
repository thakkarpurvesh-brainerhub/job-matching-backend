import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './candidate.entity/candidate.entity';
import { generateMockEmbedding } from '../utils/mock-embedding';

@Injectable()
export class CandidatesService {
  constructor(@InjectRepository(Candidate) private repo: Repository<Candidate>) {}

  async createCandidate(name: string, summary: string) {
    const embedding = generateMockEmbedding(summary);
    const candidate = this.repo.create({ name, summary, embedding });
    return this.repo.save(candidate);
  }

  async findAll() {
    return this.repo.find();
  }
}