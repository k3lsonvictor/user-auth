import { User as UserRaw } from "@prisma/client";
import { User } from "src/modules/user/entities/User";

export class PrismaUserMapper {
  static toPrisma({ createdAt, email, name, password, id }: User): UserRaw {
    return {
      createdAt,
      email,
      id,
      name,
      password,
    };
  }
}
