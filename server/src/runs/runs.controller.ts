import { Controller, Get, Param } from '@nestjs/common';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
  constructor(private readonly runsService: RunsService) {}

  @Get()
  getAllRuns() {
    return this.runsService.getAllRuns();
  }

  @Get(':id')
  getRun(@Param('id') id: string) {
    return this.runsService.getRun(id);
  }
}
