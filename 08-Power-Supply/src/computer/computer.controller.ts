import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('/computer')

export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  //http://localhost:3000/computer/processing
  @Get("/processing")
  run() {
    return [this.cpuService.compute(64, 36), this.diskService.getData()];
  }
}

