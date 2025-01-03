import { User } from "../entities/User";

export class UserViewModel {
  static toHttp({ createdAt, email, id, name }: User) {
    return {
      createdAt,
      email,
      id,
      name,
    };
  }
}
