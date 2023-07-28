import { Injectable } from '@nestjs/common';
import { map } from "rxjs";
import { FindUsersDto } from "./dto/find-users.dto";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class UserService {
    constructor(
        private httpService: HttpService
    ) {
    }

    findUsers (params: FindUsersDto) {
        return this.httpService.get('dict/users', {
            params
        })
            .pipe(
                map(res => res?.data)
            );
    }
}
