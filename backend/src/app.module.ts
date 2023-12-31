import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from "@nestjs/config";
import { configSchema } from "./config/config.schema";
import { CustomHttpModule } from './custom-http/custom-http.module';
import { FeedModule } from "./feed/feed.module";
import { ContactModule } from "./contact/contact.module";

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
    FeedModule,
    ContactModule,
  ],
  providers: [],
})
export class AppModule {}
