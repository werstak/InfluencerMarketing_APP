import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { FindFeedsDto } from './dto/find-feeds.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FeedService {
    constructor(
        private httpService: HttpService
    ) {
    }

    async findFeeds(params: FindFeedsDto) {
        return this.httpService.get('raw/ig/user/feed', {
            params
        })
            .pipe(
                map(res => res?.data),
            )
    }
}
