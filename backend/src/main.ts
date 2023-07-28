import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import * as proxy from "express-http-proxy";

async function bootstrap() {
    // const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create(AppModule,  { cors: true });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );
    app.use('/scontent', proxy('localhost:3000'));
    // app.use('/img', proxy('https://scontent-sjc3-1.cdninstagram.com/v'));
    // app.use('scontent-lax...', proxy(config.endpoints.visaProxy));
    await app.listen(3000);
}
bootstrap();
