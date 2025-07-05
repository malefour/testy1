# OpenTicket Development Setup

This guide will help you set up the complete OpenTicket development environment with both frontend and backend running on localhost.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Make the script executable and run it
chmod +x start-dev.sh
./start-dev.sh
```

### Option 2: Manual Setup
```bash
# Install all dependencies
npm install

# Start both frontend and backend
npm run dev:all
```

## 📁 Project Structure

```
openticket/
├── apps/
│   ├── api/          # Backend (NestJS + SQLite)
│   └── web/          # Frontend (React + Vite)
├── packages/
│   ├── ui/           # Shared UI components
│   ├── shared/       # Shared utilities
│   └── types/        # TypeScript types
└── start-dev.sh      # Development startup script
```

## 🌐 Server Configuration

| Service | URL | Port | Description |
|---------|-----|------|-------------|
| Frontend | http://localhost:3000 | 3000 | React development server |
| Backend API | http://localhost:3001 | 3001 | NestJS API server |
| API Proxy | http://localhost:3000/api/* | - | Proxies to backend |

## 🔧 Development Commands

### Root Level Commands
```bash
npm run dev:all        # Start both frontend and backend
npm run dev:backend    # Start only backend
npm run dev:frontend   # Start only frontend
npm run build          # Build all packages
npm run lint           # Lint all packages
npm run clean          # Clean all builds
```

### Backend Commands (apps/api/)
```bash
npm run start:dev      # Start NestJS in watch mode
npm run build          # Build TypeScript
npm run start:prod     # Start production build
```

### Frontend Commands (apps/web/)
```bash
npm run dev            # Start Vite dev server
npm run build          # Build for production
npm run preview        # Preview production build
```

## 🔐 Authentication API

The backend provides a complete authentication system with the following endpoints:

### Register User
```bash
curl -X POST http://localhost:3001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123","email":"test@example.com"}'
```

### Login User
```bash
curl -X POST http://localhost:3001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

### Get Profile (Protected)
```bash
curl -X GET http://localhost:3001/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🗄️ Database

- **Type**: SQLite (local file)
- **Location**: `apps/api/local.db`
- **Auto-creation**: Database and tables are created automatically on first run
- **Schema**: Users table with authentication data

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS enabled for frontend integration
- Input validation and sanitization
- Protected route guards

## 🧪 Testing

### Test Authentication System
```bash
cd apps/api
./test-auth.sh
```

### Manual Testing
1. Start the development environment
2. Open http://localhost:3000 for frontend
3. Use http://localhost:3001 for direct API access
4. Use http://localhost:3000/api/* for proxied API access

## 🔄 API Proxy Configuration

The frontend Vite server is configured to proxy API requests:

- **Frontend requests to `/api/*`** are automatically proxied to `http://localhost:3001/*`
- **Example**: `http://localhost:3000/api/auth/login` → `http://localhost:3001/auth/login`

This allows frontend code to use relative URLs like `/api/auth/login` instead of absolute URLs.

## 🛠️ Troubleshooting

### Port Already in Use
If you get port conflicts:
1. Check if other services are running on ports 3000 or 3001
2. Kill existing processes: `lsof -ti:3000 | xargs kill -9`
3. Or change ports in the configuration files

### Database Issues
- Delete `apps/api/local.db` to reset the database
- Check file permissions in the api directory

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules apps/*/node_modules
npm install
```

## 📝 Environment Variables

Create a `.env` file in `apps/api/` for backend configuration:
```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=3001
NODE_ENV=development
```

## 🚀 Production Deployment

For production deployment:
1. Build the frontend: `cd apps/web && npm run build`
2. Build the backend: `cd apps/api && npm run build`
3. Configure environment variables
4. Set up a production database
5. Deploy both services

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Turbo Documentation](https://turbo.build/repo/docs) 