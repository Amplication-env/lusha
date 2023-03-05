import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ConfigModule, LushaConfigService } from "@lusha/config-nestjs";
import { AuthMiddleware } from "@lusha/core-nestjs";
import { PrismaModule } from "./app/prisma/prisma.module";
import { LushaUserModule } from "./app/User/User.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [PrismaModule, LushaUserModule, ConfigModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: "/swagger", method: RequestMethod.ALL },
        { path: "/health", method: RequestMethod.ALL }
      )
      .forRoutes({
        path: "/lusha-User",
        method: RequestMethod.ALL,
      });
  }

  static register(): DynamicModule {
    return {
      module: AppModule,
    };
  }
}
