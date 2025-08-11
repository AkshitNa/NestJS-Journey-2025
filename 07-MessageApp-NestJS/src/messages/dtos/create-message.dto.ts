import { IsString } from 'class-validator';

//This is the face of my Message Object
export class CreateMessageDto {
  @IsString()
  content: string;
}
