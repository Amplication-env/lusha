import { Module } from "@nestjs/common";
import { UserController } from "../../web-server/user.controller";
import { UserRepository } from "./repositories/user.repository";

import {
  FindManyUserUseCase,
  FindOneUserUseCase,
  CreateUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
} from "./use-cases";

import { UserService } from "./services";
import { IUserRepository } from "./model/interfaces/repositories/user-repository.interface";

@Module({
  controllers: [UserController],
  providers: [
    UserRepository,
    UserService,
    {
      provide: CreateUserUseCase,
      useFactory: (repository: IUserRepository) =>
        new CreateUserUseCase(repository),
      inject: [UserRepository],
    },
    {
      provide: DeleteUserUseCase,
      useFactory: (repository: IUserRepository) =>
        new DeleteUserUseCase(repository),
      inject: [UserRepository],
    },
    {
      provide: FindOneUserUseCase,
      useFactory: (repository: IUserRepository) =>
        new FindOneUserUseCase(repository),
      inject: [UserRepository],
    },
    {
      provide: UpdateUserUseCase,
      useFactory: (repository: IUserRepository) =>
        new UpdateUserUseCase(repository),
      inject: [UserRepository],
    },
    {
      provide: FindManyUserUseCase,
      useFactory: (repository: IUserRepository) =>
        new FindManyUserUseCase(repository),
      inject: [UserRepository],
    },
  ],
})
export class LushaUserModule {}
