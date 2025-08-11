import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  
  //Using typeORM Repository
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>) {}

  //Methods
  //Create User
  createUser(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  //Find All Users
  findAll() {
    return this.userRepository.find();
  }
}


