import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { CustomHttpModule } from "../custom-http/custom-http.module";

@Module({
    imports: [
        CustomHttpModule,
    ],
    controllers: [ContactController],
    providers: [ContactService],
    exports: [ContactService]
})
export class ContactModule {}
