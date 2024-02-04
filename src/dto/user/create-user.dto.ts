import {
    IsString,
    IsEmail,
    MinLength,
    IsOptional,
    IsDateString,
  } from 'class-validator';


export class CreateUserDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsDateString()
  birthAt?: string;

  @IsOptional()
  role?: number;
}
