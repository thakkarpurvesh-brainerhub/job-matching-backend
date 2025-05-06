import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity/job.entity';
import { generateMockEmbedding } from '../utils/mock-embedding';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private jobsRepo: Repository<Job>) {}

  async createJob(title: string, description: string) {
    const embedding = generateMockEmbedding(description);
    const job = this.jobsRepo.create({ title, description, embedding });
    return this.jobsRepo.save(job);
  }

  async findById(id: number) {
    return this.jobsRepo.findOne({ where: { id } });
  }
}