import {
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from "class-validator";

export class FindFeedsDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    url: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    after?: string;
}
