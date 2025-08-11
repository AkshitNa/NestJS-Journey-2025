import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages') //baseURL
//Note: @Controller has already marked this class as @Injectable(), so no need to specifically use
//@Injectable()
export class MessagesController {

  //Constructor DI has already done in MessageService.
  constructor(public messagesService: MessagesService) {}

  //http://localhost:3000/messages [GET]
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  //http://localhost:3000/messages/create [POST]
  @Post("/create")
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  //http://localhost:3000/messages/885 [GET]
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
