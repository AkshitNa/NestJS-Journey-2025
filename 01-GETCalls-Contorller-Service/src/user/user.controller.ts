/* eslint-disable prettier/prettier */
import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user') //base URL
export class UserController {

  //http://localhost:3000/user/helloWorld
  @Get("/helloWorld")
   getHello(): string {
    return 'Hello World!';
  }
    
  //http://localhost:3000/user/getAllUsersList
  @Get('/getAllUsersList')
  getAllUsers() {
    const userService = new UserService();
    return userService.getAllusers();
  }

  //http://localhost:3000/user/getUserWithID/1
  @Get('getUserWithID/:id')
  getUserWithId(@Param('id') id: string) {
    const userService = new UserService();
    return userService.findUserWithId(+id); //+ for "Type Cast"
  }
}

