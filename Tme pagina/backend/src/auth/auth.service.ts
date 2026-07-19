import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _pass, ...result } = user;
      return result;
    }
    throw new UnauthorizedException("Credenciales inválidas");
  }

  async login(user: { id: string; email: string }) {
    return {
      access_token: this.jwtService.sign(user)
    };
  }
}
