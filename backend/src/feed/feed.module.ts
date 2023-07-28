import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { CustomHttpModule } from "../custom-http/custom-http.module";

@Module({
    imports: [
        CustomHttpModule,
    ],
    controllers: [FeedController],
    providers: [FeedService],
    exports: [FeedService]
})
export class FeedModule {}
