import {
  bootstrapV2,
  LushaAppModule,
  OptionsServiceBootstrap,
  ServiceType,
} from "@lusha/core-nestjs";
import config from "config";

import { AppModule } from "./app.module";

bootstrapV2(
  LushaAppModule.register({
    clientModules: { appModule: AppModule.register() },
  }),
  {
    serviceName: config.get("serviceName"),
    port: config.get("port"),
  } as OptionsServiceBootstrap,
  ServiceType.Restful
);
slint-disable-next-line
} from "./swagger";

const { PORT = 3000 } = process.env;

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  /** check if there is Public decorator for each path (action) and its method (findMany / findOne) on each controller */
  Object.values((document as OpenAPIObject).paths).forEach((path: any) => {
    Object.values(path).forEach((method: any) => {
      if (
        Array.isArray(method.security) &&
        method.security.includes("isPublic")
      ) {
        method.security = [];
      }
    });
  });

  SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new HttpExceptionFilter(httpAdapter));

  void app.listen(PORT);

  return app;
}

module.exports = main();
