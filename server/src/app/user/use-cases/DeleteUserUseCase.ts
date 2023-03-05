import { IUseCase } from "@infra/interfaces";
import { User } from "../model/dtos/User";
import { IUserRepository } from "../model/interfaces/repositories/user-repository.interface";
import { DeleteUserArgs } from "../model/dtos/DeleteUserArgs";

export class DeleteUserUseCase implements IUseCase<DeleteUserArgs, User> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(args: DeleteUserArgs): Promise<User> {
    return await this.userRepository.delete(args);
  }
}
