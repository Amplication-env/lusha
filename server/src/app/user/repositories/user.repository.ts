import { PrismaService } from "@app/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { IUserRepository } from "../model/interfaces/repositories/User-repository.interface";
import { User } from "../model/dtos/User";

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return await this.prisma.user.findMany(args);
  }

  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return await this.prisma.user.findUnique(args as Prisma.UserFindUniqueArgs);
  }

  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return await this.prisma.user.create<T>(args);
  }

  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return await this.prisma.user.update<T>(args);
  }

  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return await this.prisma.user.delete(args);
  }
}
