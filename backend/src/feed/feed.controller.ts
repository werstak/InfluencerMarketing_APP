import { Controller, Get, Query } from "@nestjs/common";
import { FindFeedsDto } from "./dto/find-feeds.dto";
import { FeedService } from "./feed.service";

@Controller()
export class FeedController {

    constructor(
        private feedService: FeedService
    ) {
    }
    @Get('raw/ig/user/feed')
    users(
        @Query() params: FindFeedsDto
    ) {
        return this.feedService.findFeeds(params);
    }
}
