import { IsString, IsNumber, IsOptional } from 'class-validator';

// https://github.com/typestack/class-validator

export class CreateAuthorDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}

export class UpdateAuthorDto {
    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;
}

export class FindAuthorDto {
    @IsString()
    @IsOptional()
    limit: number;
}
