import { Injectable } from '@nestjs/common';
import { map } from "rxjs";
import { FindContactDto } from "./dto/find-contact.dto";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class ContactService {
    constructor(
        private httpService: HttpService
    ) {
    }

    findContact (params: FindContactDto) {
        return this.httpService.get('exports/contacts', {
            params
        })
            .pipe(
                map(res => res?.data)
            );
    }
}
