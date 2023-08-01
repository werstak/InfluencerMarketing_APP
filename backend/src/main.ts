import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
const { createProxyMiddleware } = require('http-proxy-middleware');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
        }),
    );
    app.enableCors()
    app.use('/proxy-image', createProxyMiddleware({
        pathRewrite: function (path, req) {
            return path.replace('/proxy-image/', '')
        },
        router: (req) => {
            return new URL(req.path.replace('/proxy-image/', '')).origin
        },
        changeOrigin: true,
        logger: console
    }));

    await app.listen(3000);
}
bootstrap();
