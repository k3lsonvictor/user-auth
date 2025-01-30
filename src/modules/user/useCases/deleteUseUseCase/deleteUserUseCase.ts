import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../repositories/UserRepository";

interface DeleteUserRequest {
  id: string;
}
@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ id } : DeleteUserRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      console.log("User not found");
    }

    await this.userRepository.delete(id);
  }
}