// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );
    await app.listen(3000);
}

bootstrap();
