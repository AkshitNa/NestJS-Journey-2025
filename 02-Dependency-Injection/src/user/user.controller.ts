/* eslint-disable prettier/prettier */
import { UserService } from './user.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('user') //base URL
export class UserController {

  //Dependency Injection
  constructor(private readonly userService: UserService){
  }

  //http://localhost:3000/user/helloWorld
  @Get("/helloWorld")
   getHello(): string {
    return 'Hello World!';
  }
    
  //http://localhost:3000/user/getAllUsersList
  @Get('/getAllUsersList')
  getAllUsers() {
    return this.userService.getAllusers();
  }

  //http://localhost:3000/user/getUserWithID/1
  @Get('getUserWithID/:id')
  getUserWithId(@Param('id') id: string) {
    return this.userService.findUserWithId(+id); //+ for "Type Cast"
  }
}

