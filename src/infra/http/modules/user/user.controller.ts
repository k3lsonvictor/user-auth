import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "src/modules/user/viewModel/userViewModel";
import { GetUsersUseCase } from "src/modules/user/useCases/getUsersUseCase/getUserUseCase";
import { GetUserUseCase } from "src/modules/user/useCases/getUserUseCase/getUserUseCase";
import { DeleteUserUseCase } from "src/modules/user/useCases/deleteUseUseCase/deleteUserUseCase";

@Controller("users")
export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getUsersUseCase: GetUsersUseCase,
    private getUserUseCase: GetUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { email, name, password } = body;

    const user = await this.createUserUseCase.execute({
      email,
      name,
      password,
    });

    return UserViewModel.toHttp(user);
  }

  @Get()
  async getAll() {
    const users = await this.getUsersUseCase.execute();
    console.log(users);
    return users;
  }

  @Get(":id")
  async getById(@Param("id") id: string) {
    const user = await this.getUserUseCase.execute(id);
    return user;
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    await this.deleteUserUseCase.execute({ id });
    return { message: "User deleted" };
  }
}
