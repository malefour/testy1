#!/bin/bash

echo "🚀 Starting OpenTicket Development Environment"
echo "=============================================="
echo ""
echo "This will start both frontend and backend servers:"
echo "• Frontend: http://localhost:3000"
echo "• Backend API: http://localhost:3001"
echo "• API Proxy: http://localhost:3000/api/* -> http://localhost:3001/*"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "apps/api/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd apps/api && npm install && cd ../..
fi

if [ ! -d "apps/web/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd apps/web && npm install && cd ../..
fi

echo "🚀 Starting servers..."
echo ""

# Start both servers
npm run dev:all 