# OpenTicket

A modern blockchain-based NFT ticketing platform built with React, TypeScript, and Solana.

## 🏗️ Project Structure

This is a modern monorepo using npm workspaces and Turbo for efficient development:

```
openticket/
├── apps/
│   ├── web/          # Frontend React application
│   └── api/          # Backend API (NestJS)
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

- **Frontend:** `cd apps/web && npm run dev`
- **Backend:** `cd apps/api && npm run start:dev`

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
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Framer Motion** for animations

## 🔧 Scripts

- `npm run dev` - Start all development servers
- `npm run build` - Build all packages and apps
- `npm run lint` - Lint all packages
- `npm run clean` - Clean all build outputs
- `npm run type-check` - Run TypeScript type checking

## 🎯 Features

- **NFT Ticketing** - Blockchain-based tickets on Solana
- **Anti-Scalping** - Smart contract controls
- **Mobile App** - Ticket verification and entry
- **Analytics** - Real-time event insights
- **White-Label** - Customizable for enterprise clients

## 📄 License

MIT 