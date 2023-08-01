import { Controller, Get, Query } from "@nestjs/common";
import { FindContactDto } from "./dto/find-contact.dto";
import { ContactService } from "./contact.service";

@Controller()
export class ContactController {

    constructor(
        private contactService: ContactService
    ) {
    }
    @Get('exports/contacts')
    users(
        @Query() params: FindContactDto
    ) {
        return this.contactService.findContact(params);
    }
}
