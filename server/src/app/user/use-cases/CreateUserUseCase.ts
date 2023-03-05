import { IUseCase } from "@infra/interfaces";
import { User } from "../model/dtos/User";
import { IUserRepository } from "../model/interfaces/repositories/user-repository.interface";
import { CreateUserArgs } from "../model/dtos/CreateUserArgs";

export class CreateUserUseCase implements IUseCase<CreateUserArgs, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: CreateUserArgs): Promise<User> {
    return await this.userRepository.create(args);
  }
}
