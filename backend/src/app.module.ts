// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';


import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { configSchema } from "./config/config.schema";
import { CustomHttpModule } from './custom-http/custom-http.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationSchema: configSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    CustomHttpModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
