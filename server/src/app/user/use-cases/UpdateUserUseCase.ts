import { IUseCase } from "@infra/interfaces";
import { User } from "../model/dtos/User";
import { IUserRepository } from "../model/interfaces/repositories/user-repository.interface";
import { UpdateUserArgs } from "../model/dtos/UpdateUserArgs";

export class UpdateUserUseCase implements IUseCase<UpdateUserArgs, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: UpdateUserArgs): Promise<User> {
    return await this.userRepository.update(args);
  }
}
