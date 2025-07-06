import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto, LoginDto, AuthResponseDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  signup(@Body() dto: SignupDto): AuthResponseDto {
    return this.authService.signup(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto): AuthResponseDto {
    return this.authService.login(dto);
  }
} 