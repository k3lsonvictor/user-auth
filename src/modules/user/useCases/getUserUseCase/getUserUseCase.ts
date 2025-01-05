import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/modules/user/repositories/UserRepository";

@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string) {
    const user = await this.userRepository.getById(id);
    return user;
  }
}
