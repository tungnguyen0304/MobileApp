import { Injectable, NotFoundException } from '@nestjs/common';
import { Run } from './run.model';

@Injectable()
export class RunsService {
  private runs: Run[] = [
    {
      id: '1',
      time: 100,
      description: 'Run alone',
    },
    {
      id: '2',
      time: 200,
      description: 'Run with friend',
    },
    {
      id: '3',
      time: 250,
      description: 'Run with friends',
    },
  ];
  getAllRuns() {
    return [...this.runs];
  }
  findRun(id: string) {
    return this.runs.find((value) => value.id == id);
  }
  getRun(id: string) {
    const run = this.findRun(id);
    if (run == null) {
      throw new NotFoundException('Run not found');
    }
    return { ...run };
  }
  createRun(description: string, time: number) {
    const lastId = this.runs[this.runs.length - 1].id;
    const nextId = (parseInt(lastId) + 1).toString();

    this.runs.push({
      id: nextId,
      description,
      time,
    });

    return { newId: nextId };
  }
}
