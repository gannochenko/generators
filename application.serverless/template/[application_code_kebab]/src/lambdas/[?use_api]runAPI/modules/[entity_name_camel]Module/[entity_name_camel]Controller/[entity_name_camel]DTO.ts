import {
    IsString,
    IsNumber,
    IsOptional,
    IsBoolean,
    Min,
    MinLength,
    IsIn,
    Max,
    IsUUID,
    MaxLength,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    Validate,
} from 'class-validator';

// https://github.com/typestack/class-validator

export class CreateDto {
    @IsString()
    @MinLength(10, {
        message: 'Name is too short',
    })
    name: string;

    @IsString()
    content: string;
}

export class UpdateDto {}

export class FindDto {
    @IsString()
    @IsOptional()
    @Max(50)
    limit: number;

    @IsString()
    @IsOptional()
    lastId: string;
}
