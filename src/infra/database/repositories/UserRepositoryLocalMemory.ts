import { Injectable } from "@nestjs/common";
import { User } from "../../../modules/user/entities/User";
import { UserRepository } from "../../../modules/user/repositories/UserRepository";

@Injectable()
export class UserRepositoryLocalMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User) {
    this.users.push(user);
  }
}
