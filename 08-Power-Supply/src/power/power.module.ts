import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], //to make it available for other module also
})
export class PowerModule {}

