import { Injectable } from "@nestjs/common";

import {
  FindManyUserUseCase,
  FindOneUserUseCase,
  CreateUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
} from "../use-cases";

import { User } from "../model/dtos/user";
import { UserFindManyArgs } from "../model/dtos/UserFindManyArgs";
import { UserFindUniqueArgs } from "../model/dtos/UserFindUniqueArgs";
import { CreateUserArgs } from "../model/dtos/CreateUserArgs";
import { UpdateUserArgs } from "../model/dtos/UpdateUserArgs";
import { DeleteUserArgs } from "../model/dtos/DeleteUserArgs";
import { PasswordService } from "../auth/password.service";

@Injectable()
export class UserService {
  constructor(
    private findManyUseCase: FindManyUserUseCase,
    private findOneUseCase: FindOneUserUseCase,
    private createUseCase: CreateUserUseCase,
    private updateUseCase: UpdateUserUseCase,
    private deleteUseCase: DeleteUserUseCase,
    protected readonly passwordService: PasswordService
  ) {}

  async findMany(args: UserFindManyArgs): Promise<User[]> {
    return this.findManyUseCase.execute(args);
  }
  async findOne(args: UserFindUniqueArgs): Promise<User | null> {
    return this.findOneUseCase.execute(args);
  }
  async create(args: CreateUserArgs): Promise<User> {
    return this.createUseCase.execute(args);
  }
  async update(args: UpdateUserArgs): Promise<User> {
    return this.updateUseCase.execute(args);
  }
  async delete(args: DeleteUserArgs): Promise<User> {
    return this.deleteUseCase.execute(args);
  }
}
