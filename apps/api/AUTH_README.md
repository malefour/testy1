# Authentication System

This backend implements a complete username and password authentication system using NestJS, SQLite, and JWT tokens.

## Features

- User registration with username, password, and email
- User login with JWT token generation
- Password hashing using bcrypt
- Protected routes using JWT authentication
- Local SQLite database for data persistence
- User profile retrieval

## API Endpoints

### POST /auth/register
Register a new user.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### POST /auth/login
Login with existing credentials.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### GET /auth/profile
Get user profile (requires authentication).

**Headers:**
```
Authorization: Bearer <access_token>
```

**Response:**
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

## Setup

1. Install dependencies:
```bash
cd apps/api
npm install
```

2. Set environment variables (create a .env file):
```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=3000
NODE_ENV=development
```

3. Start the server:
```bash
npm run start:dev
```

## Database

The system uses SQLite with a local database file (`local.db`) that is automatically created when the application starts. The database includes a `users` table with the following schema:

- `id`: Primary key (auto-increment)
- `username`: Unique username
- `password`: Hashed password
- `email`: Unique email address
- `created_at`: Timestamp when user was created
- `updated_at`: Timestamp when user was last updated

## Security Features

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT tokens expire after 24 hours
- Username and email uniqueness validation
- Protected routes require valid JWT tokens
- Input validation and error handling

## Testing the API

You can test the endpoints using curl or any API client:

1. Register a new user:
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123","email":"test@example.com"}'
```

2. Login:
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

3. Get profile (replace TOKEN with the access_token from login):
```bash
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer TOKEN"
``` 