// import { Injectable } from "@nestjs/common";
// import { User } from "../../../modules/user/entities/User";
// import { UserRepository } from "../../../modules/user/repositories/UserRepository";

// @Injectable()
// export class UserRepositoryLocalMemory implements UserRepository {
//   public users: User[] = [];

//   async create(user: User) {
//     this.users.push(user);
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     const user = this.users.find((user) => user.email === email);

//     if (!user) return null;

//     return user;
//   }
// }
