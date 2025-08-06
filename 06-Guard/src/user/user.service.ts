/* eslint-disable prettier/prettier */
import { UserDTO } from './dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Akshit',
      type: 'celebrity',
    },
    {
      id: 2,
      name: 'Ayush',
      type: 'ordinary person',
    },
    {
      id: 3,
      name: 'Vidit',
      type: 'fan',
    },
  ];

  //functions

  //To get all users
  getAllusers() {
    return this.users;
  }

  //To get all a user with ID
  findUserWithId(id: number) {
    const user = this.users.find((user) => user.id === id);

    //Handling Error: If user is not found
    if(!user){
      throw new Error("User Not Found with ID " + id);
    }
    return user;
  }
  
  //To create a new user
  createUser(user: UserDTO){
    const id = Date.now();
    this.users.push({
      id,
      ...user
    });

    return this.findUserWithId(id);
  }
}