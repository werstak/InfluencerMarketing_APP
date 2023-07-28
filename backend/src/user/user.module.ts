import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { UserService } from './user.service';
import { CustomHttpModule } from "../custom-http/custom-http.module";

@Module({
    imports: [
        CustomHttpModule,
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
