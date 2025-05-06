import { Injectable } from '@nestjs/common';
import { CandidatesService } from '../candidates/candidates.service';
import { cosineSimilarity } from '../utils/cosine-similarity';
import { generateMockEmbedding } from '../utils/mock-embedding';

@Injectable()
export class MatchService {
  constructor(
    private candidatesService: CandidatesService,
  ) {}

  async matchByDescription(description: string) {
    const embedding = generateMockEmbedding(description);
    const candidates = await this.candidatesService.findAll();

    const scored = candidates.map(candidate => ({
      candidate,
      score: cosineSimilarity(embedding, candidate.embedding),
    }));

    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(result => ({
        name: result.candidate.name,
        summary: result.candidate.summary,
        score: result.score,
      }));
  }
}
