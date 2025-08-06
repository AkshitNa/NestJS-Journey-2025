/* eslint-disable prettier/prettier */
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

@Controller('user') //base URL
export class UserController {
  //Dependency Injection
  constructor(private readonly userService: UserService) {}

  //http://localhost:3000/user/helloWorld
  @Get('/helloWorld')
  getHello(): string {
    return 'Hello World!';
  }

  //http://localhost:3000/user/getAllUsersList
  @Get('/getAllUsersList')
  getAllUsers() {
    return this.userService.getAllusers();
  }

  //http://localhost:3000/user/getUserWithID/1
  @Get('/getUserWithID/:id')
  getUserWithId(@Param('id') id: string) {
    try {
      return this.userService.findUserWithId(+id); //+ for "Type Cast"
    } catch (error) {
      //this "error" is coming form the "UserService"
      throw new NotFoundException(error.message);
    }
  }

  //http://localhost:3000/user/createUser [POST]
  @Post('/createUser')
  createUser(@Body() user: UserDTO) {
    return this.userService.createUser(user);
  }
  
}

