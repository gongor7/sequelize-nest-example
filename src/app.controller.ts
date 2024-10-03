import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  createUser(@Body() body: { name: string; email: string }) {
    return this.appService.createUser(body.name, body.email);
  }

  @Get('users')
  getUsers() {
    return this.appService.findAllUsers();
  }
}
