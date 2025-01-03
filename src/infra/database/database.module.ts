import { Module } from "@nestjs/common";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { UserRepositoryLocalMemory } from "src/infra/database/repositories/UserRepositoryLocalMemory";

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryLocalMemory,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
