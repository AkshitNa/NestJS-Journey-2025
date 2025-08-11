import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], //to use Power Module
  providers: [DiskService],
  exports: [DiskService], //to make it available for other module also
})
export class DiskModule {}

