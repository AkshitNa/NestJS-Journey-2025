/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';
export class UserDTO {
  @Transform(({ value }) => {
    if (value === 'Virat') {
      return 'Virat Kohli';
    } else {
      return value;
    }
  })
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  type: string;
}