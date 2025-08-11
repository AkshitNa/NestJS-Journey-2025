import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  //Dependency Injection
  constructor(private readonly userService: UserService) {}

  //http://localhost:3000/users/createUser
  @Post("/createUser")
  create(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }

  //http://localhost:3000/users/findAllUsers
  @Get("/findAllUsers")
  findAll() {
    return this.userService.findAll();
  }
}

