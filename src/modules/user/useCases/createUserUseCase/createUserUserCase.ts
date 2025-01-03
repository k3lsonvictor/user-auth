import { Injectable } from "@nestjs/common";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { hash } from "bcrypt";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}
@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password }: CreateUserRequest) {
    // const userAlreadyExists = await this.userRepository.findByEmail(email);

    // if (userAlreadyExists) throw new Error("User already exists");

    const user = new User({
      name,
      email,
      password: await hash(password, 10),
    });

    await this.userRepository.create(user);

    return user;
  }
}
