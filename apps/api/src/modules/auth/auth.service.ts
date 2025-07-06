import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { MockService } from '../mock/mock.service';
import { SignupDto, LoginDto, AuthResponseDto } from './dto/auth.dto';

// Simple mock JWT (not secure, for local dev only)
function createMockJwt(payload: any): string {
  return Buffer.from(JSON.stringify(payload)).toString('base64') + '.mocktoken';
}

function verifyMockJwt(token: string): any | null {
  if (!token.endsWith('.mocktoken')) return null;
  try {
    const payload = Buffer.from(token.replace('.mocktoken', ''), 'base64').toString('utf8');
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

@Injectable()
export class AuthService {
  constructor(private readonly mockService: MockService) {}

  signup(dto: SignupDto): AuthResponseDto {
    // Check for existing user
    if (this.mockService.findUserByUsername(dto.username)) {
      throw new BadRequestException('Username already exists');
    }
    if (this.mockService.findUserByEmail(dto.email)) {
      throw new BadRequestException('Email already exists');
    }
    // Create user
    const user = this.mockService.createUser({
      username: dto.username,
      email: dto.email,
      password: dto.password, // In real app, hash this
      role: dto.role || 'attendee',
    });
    // Return mock JWT
    return this.buildAuthResponse(user);
  }

  login(dto: LoginDto): AuthResponseDto {
    const user = this.mockService.findUserByUsername(dto.username);
    if (!user || user.password !== dto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.buildAuthResponse(user);
  }

  validateJwt(token: string): any | null {
    return verifyMockJwt(token);
  }

  validateUser(userId: string): any | null {
    return this.mockService.findUserById(userId);
  }

  private buildAuthResponse(user: any): AuthResponseDto {
    const payload = { userId: user.id, username: user.username, email: user.email, role: user.role };
    return {
      ...payload,
      access_token: createMockJwt(payload),
    };
  }
} 