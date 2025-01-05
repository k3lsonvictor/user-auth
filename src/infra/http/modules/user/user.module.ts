import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { DatabaseModule } from "src/infra/database/database.module";
import { GetUsersUseCase } from "src/modules/user/useCases/getUsersUseCase/getUserUseCase";
import { GetUserUseCase } from "src/modules/user/useCases/getUserUseCase/getUserUseCase";

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserUseCase, GetUsersUseCase, GetUserUseCase],
  controllers: [UserController],
})
export class UserModule {}
