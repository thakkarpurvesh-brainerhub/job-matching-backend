import { Controller, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('api/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() body: { title: string; description: string }) {
    const { title, description } = body;
    return this.jobsService.createJob(title, description);
  }
}
