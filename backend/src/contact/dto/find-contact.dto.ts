import {
    IsEnum,
    IsNotEmpty,
    IsString,
    MaxLength,
} from "class-validator";
import { PlatformEnum } from "../../shared/platform.enum";

export class FindContactDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    url: string;

    @IsNotEmpty()
    @IsEnum(PlatformEnum)
    platform: PlatformEnum = PlatformEnum.INSTAGRAM;
}
