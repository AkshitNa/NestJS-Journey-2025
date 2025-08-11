import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule],//to use Power Module
  providers: [CpuService],
  exports: [CpuService], //to make it available for other module also
})
export class CpuModule {}

