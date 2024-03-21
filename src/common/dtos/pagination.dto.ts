import { Type } from "class-transformer";
import { IsInt, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    @IsPositive() @IsOptional() @Type(()=>Number)
    limit?: number;

    @Min(0) @IsOptional() @Type(()=>Number)
    offset?: number;
}