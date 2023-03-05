import { Prisma } from "@prisma/client";
import { User } from "../../dtos/User";

export interface IUserRepository {
  findMany: (args: Prisma.userFindManyArgs) => Promise<User[]>;
  findOne: (args: Prisma.userFindUniqueArgs) => Promise<User>;
  create: (args: Prisma.userCreateArgs) => Promise<User>;
  update: (args: Prisma.userUpdateArgs) => Promise<User>;
  delete: (args: Prisma.userDeleteArgs) => Promise<User>;
}
