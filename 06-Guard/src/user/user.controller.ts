/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MyFireGuardGuard } from 'src/my-fire-guard/my-fire-guard.guard';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

@Controller('user') //Base URL
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
  getUserWithId(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userService.findUserWithId(id); //+ for "Type Cast"
    } catch (error) {
      //this "error" is coming form the "UserService"
      throw new NotFoundException(error.message);
    }
  }

  //http://localhost:3000/user/createUser [POST]
  @Post('/createUser')
  @UseGuards(MyFireGuardGuard)
  createUser(@Body(new ValidationPipe({transform: true})) user: UserDTO) {
    return this.userService.createUser(user);
  }
}

//Note: In this project, I am using "GUARD" as a result 
// name = Akshit is only valid else every request will fail.

