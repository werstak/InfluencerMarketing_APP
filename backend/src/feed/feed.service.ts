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
                map(res => {
                    const items = res.data.items?.map((item) => {
                        const origin_url = item.display_url.split('/').slice(0, 3).join('/');
                        return {
                            ...item,
                            display_url: 'http://localhost:3000/proxy-image/' + item.display_url
                        }
                    })
                    return {
                        items: items
                    }
                })
            )
    }
}
