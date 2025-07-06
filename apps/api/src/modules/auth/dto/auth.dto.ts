import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(4)
  password!: string;

  @IsOptional()
  @IsString()
  role?: 'organiser' | 'attendee';
}

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

export class AuthResponseDto {
  userId!: string;
  username!: string;
  email!: string;
  role!: string;
  access_token!: string;
}

export class UserResponseDto {
  id!: number;
  username!: string;
  email!: string;
  created_at!: string;
  updated_at!: string;
} 