import { IUseCase } from "@infra/interfaces";
import { User } from "../model/dtos/User";
import { IUserRepository } from "../model/interfaces/repositories/user-repository.interface";
import { UserFindManyArgs } from "../model/dtos/UserFindManyArgs";

export class FindManyUserUseCase implements IUseCase<UserFindManyArgs, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: UserFindManyArgs): Promise<User[]> {
    return await this.userRepository.findMany(args);
  }
}
