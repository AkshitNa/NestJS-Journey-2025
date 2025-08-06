/* eslint-disable prettier/prettier */
import { UserService } from './user.service';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

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

    try {
        return this.userService.findUserWithId(+id); //+ for "Type Cast"
    } catch (error) {
      //this "error" is coming form the "UserService"
      throw new NotFoundException(error.message);
    }
  }
  
}

