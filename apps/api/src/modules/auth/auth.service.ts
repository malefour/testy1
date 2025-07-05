import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { DatabaseService, User } from '../../database/database.service';
import { RegisterDto, LoginDto, AuthResponseDto, UserResponseDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const { username, password, email } = registerDto;

    // Check if user already exists
    const existingUser = await this.databaseService.getUserByUsername(username);
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const existingEmail = await this.databaseService.getUserByEmail(email);
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = await this.databaseService.createUser(username, hashedPassword, email);
    if (!user) {
      throw new Error('Failed to create user');
    }

    // Generate JWT token
    const payload = { username: user.username, sub: user.id };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const { username, password } = loginDto;

    // Find user
    const user = await this.databaseService.getUserByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const payload = { username: user.username, sub: user.id };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }

  async validateUser(userId: number): Promise<UserResponseDto | null> {
    const user = await this.databaseService.getUserById(userId);
    if (!user) {
      return null;
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }

  async getProfile(userId: number): Promise<UserResponseDto> {
    const user = await this.databaseService.getUserById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
} 