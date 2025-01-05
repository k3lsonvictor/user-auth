import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/UserRepository";

@Injectable()
export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute() {
    const users = await this.userRepository.get();
    return users;
  }
}
