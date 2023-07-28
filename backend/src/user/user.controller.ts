import { Controller, Get, Query } from "@nestjs/common";
import { FindUsersDto } from "./dto/find-users.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController {

    constructor(
        private userService: UserService
    ) {
    }
    @Get('dict/users')
    users(
        @Query() params: FindUsersDto
    ) {
        return this.userService.findUsers(params);
    }
}
