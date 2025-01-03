import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUserCase";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  providers: [CreateUserUseCase],
  controllers: [UserController],
})
export class UserModule {}
