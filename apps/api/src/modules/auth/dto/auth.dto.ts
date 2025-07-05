export class RegisterDto {
  username!: string;
  password!: string;
  email!: string;
}

export class LoginDto {
  username!: string;
  password!: string;
}

export class AuthResponseDto {
  access_token!: string;
  user!: {
    id: number;
    username: string;
    email: string;
  };
}

export class UserResponseDto {
  id!: number;
  username!: string;
  email!: string;
  created_at!: string;
  updated_at!: string;
} 