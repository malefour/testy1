# ✅ Unified Hosting Setup Complete

Your OpenTicket development environment is now configured to run both frontend and backend on localhost with unified hosting!

## 🎯 What's Been Set Up

### ✅ **Port Configuration**
- **Frontend**: http://localhost:3000 (React + Vite)
- **Backend**: http://localhost:3001 (NestJS + SQLite)
- **API Proxy**: http://localhost:3000/api/* → http://localhost:3001/*

### ✅ **Unified Development Commands**
```bash
# Start both frontend and backend together
npm run dev:all

# Or use the automated script
./start-dev.sh
```

### ✅ **API Proxy Configuration**
- Frontend requests to `/api/*` are automatically proxied to the backend
- No need to manage CORS or absolute URLs in frontend code
- Seamless integration between frontend and backend

### ✅ **Authentication System**
- Complete username/password authentication
- JWT token-based sessions
- Local SQLite database
- Protected routes and validation

## 🚀 How to Use

### Quick Start
```bash
# From the project root
./start-dev.sh
```

### Manual Start
```bash
# Install dependencies (if needed)
npm install

# Start both servers
npm run dev:all
```

### Individual Services
```bash
npm run dev:frontend   # Start only frontend
npm run dev:backend    # Start only backend
```

## 🌐 Access Points

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | React development server |
| Backend API | http://localhost:3001 | Direct API access |
| API Proxy | http://localhost:3000/api/* | Proxied API access |

## 🔐 Testing the Setup

### Test Frontend
```bash
curl http://localhost:3000
# Should return HTML content
```

### Test Backend Direct
```bash
curl http://localhost:3001/auth/profile
# Should return: {"message":"Unauthorized","statusCode":401}
```

### Test API Proxy
```bash
curl http://localhost:3000/api/auth/profile
# Should return: {"message":"Unauthorized","statusCode":401}
```

### Test Authentication
```bash
# Register a user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123","email":"test@example.com"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

## 🔄 Frontend Integration Ready

When you're ready to connect the frontend to the backend:

1. **Use relative URLs** in your frontend code:
   ```javascript
   // ✅ Good - uses proxy
   fetch('/api/auth/login', { method: 'POST', body: data })
   
   // ❌ Avoid - absolute URLs
   fetch('http://localhost:3001/auth/login', { method: 'POST', body: data })
   ```

2. **API endpoints available**:
   - `POST /api/auth/register` - User registration
   - `POST /api/auth/login` - User login
   - `GET /api/auth/profile` - Get user profile (protected)

3. **Authentication flow**:
   - Register/login to get JWT token
   - Include token in Authorization header: `Bearer <token>`
   - Access protected endpoints

## 📁 Key Files Modified

- `apps/api/src/main.ts` - Added CORS and port configuration
- `apps/web/vite.config.ts` - Added API proxy configuration
- `package.json` - Added unified development scripts
- `start-dev.sh` - Automated startup script
- `DEVELOPMENT_SETUP.md` - Comprehensive documentation

## 🎉 Ready for Development!

Your unified hosting setup is complete and ready for frontend-backend integration. Both services are running on localhost with seamless API proxying, making development smooth and efficient.

**Next Steps:**
1. Open http://localhost:3000 in your browser to see the frontend
2. Use the API endpoints at http://localhost:3000/api/* for backend integration
3. Start building your frontend authentication UI! 