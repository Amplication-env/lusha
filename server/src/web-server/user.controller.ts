import * as common from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { isRecordNotFoundError } from "../prisma.util";
import * as errors from "../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "../app/user/services/user.service";
import { UserCreateInput } from "../app/user/model/dtos/UserCreateInput";
import { UserWhereUniqueInput } from "../app/user/model/dtos/UserWhereUniqueInput";
import { UserFindManyArgs } from "../app/user/model/dtos/userFindManyArgs";
import { UserUpdateInput } from "../app/user/model/dtos/UserUpdateInput";
import { User } from "../app/user/model/dtos/User";

@ApiTags("wished-contacts-v2")
@common.Controller("User")
export class UserController {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.Post()
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
    });
  }

  @common.Get()
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
    });
  }

  @common.Get("/:id")
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
