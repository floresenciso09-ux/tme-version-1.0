import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() payload: { email: string; name: string; password: string }) {
    return this.usersService.createUser({ ...payload, role: "client" });
  }
}
