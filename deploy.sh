#!/bin/bash

echo "🚀 Deploying OpenTicket to Bolt"
echo "================================"

# Build the backend
echo "📦 Building backend..."
cd apps/api
npm run build
cd ../..

# Build the frontend
echo "📦 Building frontend..."
cd apps/web
npm run build
cd ../..

echo "✅ Build complete!"
echo ""
echo "To deploy to Bolt:"
echo "1. bolt deploy openticket"
echo "2. bolt deploy testy1"
echo ""
echo "Make sure to set environment variables in Bolt dashboard:"
echo "- NODE_ENV=production"
echo "- JWT_SECRET=your-secret-key"
echo "- FRONTEND_URL=https://openticket.bolt.dev" 