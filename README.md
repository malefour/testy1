# OpenTicket

A modern blockchain-based NFT ticketing platform built with React, TypeScript, and Solana.

## 🏗️ Project Structure

This is a modern monorepo using npm workspaces and Turbo for efficient development:

```
openticket/
├── apps/
│   ├── web/          # Frontend React application (Vite + React)
│   └── api/          # Backend API (NestJS + TypeScript)
├── packages/
│   ├── ui/           # Shared UI components
│   ├── shared/       # Shared utilities and configs
│   ├── config/       # Configuration packages
│   └── types/        # Shared TypeScript types
├── package.json      # Root workspace configuration
└── turbo.json        # Build system configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 10+

### Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

3. **Build all packages:**
   ```bash
   npm run build
   ```

### Individual Apps

- **Frontend:** `cd apps/web && npm run dev` (runs on http://localhost:5173)
- **Backend:** `cd apps/api && npm run start:dev` (runs on http://localhost:3000)

## 🔧 Backend Architecture

The backend is built with **NestJS 10.x** and provides a robust API for the OpenTicket platform:

### Core Modules
- **Auth** - User authentication and authorization
- **Users** - User management and profiles
- **Events** - Event creation and management
- **Tickets** - NFT ticket operations
- **Payments** - Payment processing
- **Marketplace** - Secondary ticket marketplace
- **Wallets** - Wallet management
- **Redemption** - Ticket redemption and validation
- **Webhooks** - External service integrations

### Backend Structure
```
apps/api/src/
├── main.ts              # NestJS entrypoint
├── app.module.ts        # Root module
├── config/              # Centralized configuration
├── modules/             # Feature modules
├── database/            # Database schemas and migrations
├── common/              # Shared utilities, DTOs, enums
├── jobs/                # Background job processing
└── logger/              # Logging service
```

### Backend Scripts
- `npm run start:dev` - Development server with hot reload
- `npm run start` - Production server
- `npm run build` - Build for production
- `npm run start:prod` - Run production build

## 📦 Packages

### `@openticket/ui`
Shared UI components including:
- Button components
- Theme toggle
- Timeline components
- Hero sections
- Utility functions

### `@openticket/shared`
Shared utilities and configurations for both frontend and backend.

## 🛠️ Development

This project uses:
- **Turbo** for monorepo build orchestration
- **TypeScript** for type safety
- **Vite** for fast frontend development
- **NestJS** for backend API development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Framer Motion** for animations

## 🔧 Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages
- `npm run clean` - Clean all build outputs
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🎯 Features

- **NFT Ticketing** - Blockchain-based tickets on Solana
- **Anti-Scalping** - Smart contract controls
- **Mobile App** - Ticket verification and entry
- **Analytics** - Real-time event insights
- **White-Label** - Customizable for enterprise clients
- **RESTful API** - Comprehensive backend services
- **Real-time Updates** - WebSocket support for live data

## 📄 License

MIT 