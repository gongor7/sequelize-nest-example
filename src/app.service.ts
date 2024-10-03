import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(name: string, email: string): Promise<User> {
    return this.userModel.create({ name, email });
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
