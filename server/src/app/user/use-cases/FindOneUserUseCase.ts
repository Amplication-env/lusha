import { IUseCase } from "@infra/interfaces";
import { User } from "../model/dtos/User";
import { IUserRepository } from "../model/interfaces/repositories/user-repository.interface";
import { UserFindOneArgs } from "../model/dtos/UserFindOneArgs";

export class FindOneUserUseCase implements IUseCase<UserFindOneArgs, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: UserFindOneArgs): Promise<User | null> {
    return await this.userRepository.findOne(args);
  }
}
