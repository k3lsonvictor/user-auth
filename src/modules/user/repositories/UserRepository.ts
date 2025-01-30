import { User } from "../entities/User";

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
  abstract get(): Promise<User[] | null>;
  abstract getById(id: string): Promise<User | null>;
  abstract delete(id: string): Promise<void>;
}
