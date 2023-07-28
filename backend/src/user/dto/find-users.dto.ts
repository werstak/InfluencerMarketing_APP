import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    Min
} from "class-validator";
import { TypeEnum } from "../../shared/type.enum";
import { PlatformEnum } from "../../shared/platform.enum";
import { Transform } from "class-transformer";

export class FindUsersDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    q: string;

    @IsNotEmpty()
    @IsEnum(TypeEnum)
    type: TypeEnum = TypeEnum.SEARCH;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(100)
    @Transform(params => Number(params.value))
    limit: number = 5;

    @IsNotEmpty()
    @IsEnum(PlatformEnum)
    platform: PlatformEnum = PlatformEnum.INSTAGRAM;
}
