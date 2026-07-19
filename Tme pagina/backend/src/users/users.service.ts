import { Injectable } from "@nestjs/common";

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: "1",
      email: "admin@tme.com",
      name: "Administrador TME",
      role: "admin",
      password: "$2b$10$placeholderhashplaceholderhashpl"
    }
  ];

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  async findAll() {
    return this.users.map(({ password, ...profile }) => profile);
  }

  async createUser(user: Omit<User, "id">) {
    const newUser = { id: `${Date.now()}`, ...user };
    this.users.push(newUser);
    const { password, ...profile } = newUser;
    return profile;
  }
}
