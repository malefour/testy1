import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
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

  @Get('profile')
  getProfile(@Request() req: any) {
    // For now, we'll use a simple approach without JWT guard
    // In a real app, you'd use @UseGuards(JwtAuthGuard)
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('No token provided');
    }
    
    const token = authHeader.substring(7);
    const payload = this.authService.validateJwt(token);
    if (!payload) {
      throw new Error('Invalid token');
    }
    
    const user = this.authService.validateUser(payload.userId);
    if (!user) {
      throw new Error('User not found');
    }
    
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      created_at: user.createdAt.toISOString(),
      updated_at: user.createdAt.toISOString(),
    };
  }
} 