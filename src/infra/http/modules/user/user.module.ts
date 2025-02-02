import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { DatabaseModule } from "src/infra/database/database.module";
import { GetUsersUseCase } from "src/modules/user/useCases/getUsersUseCase/getUserUseCase";
import { GetUserUseCase } from "src/modules/user/useCases/getUserUseCase/getUserUseCase";
import { DeleteUserUseCase } from "src/modules/user/useCases/deleteUseUseCase/deleteUserUseCase";

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserUseCase, GetUsersUseCase, GetUserUseCase, DeleteUserUseCase],
  controllers: [UserController],
})
export class UserModule {}
