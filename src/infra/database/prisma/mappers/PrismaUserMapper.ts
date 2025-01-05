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

  static toDomain({ id, createdAt, email, name, password }: UserRaw): User {
    return new User(
      {
        createdAt,
        email,
        name,
        password,
      },
      id,
    );
  }

  static toResponse(user: User): Omit<UserRaw, "password"> {
    return user.toJSON(); // Usa o método toJSON para formatar o retorno
  }
}
