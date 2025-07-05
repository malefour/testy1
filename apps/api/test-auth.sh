#!/bin/bash

echo "🧪 Testing Authentication System"
echo "================================="

BASE_URL="http://localhost:3001"

echo ""
echo "1. Testing User Registration..."
echo "-------------------------------"
REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"demo_user","password":"securepass123","email":"demo@example.com"}')

echo "Response: $REGISTER_RESPONSE"

# Extract token from response
TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"access_token":"[^"]*"' | cut -d'"' -f4)

echo ""
echo "2. Testing User Login..."
echo "------------------------"
LOGIN_RESPONSE=$(curl -s -X POST $BASE_URL/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo_user","password":"securepass123"}')

echo "Response: $LOGIN_RESPONSE"

echo ""
echo "3. Testing Protected Profile Endpoint..."
echo "----------------------------------------"
PROFILE_RESPONSE=$(curl -s -X GET $BASE_URL/auth/profile \
  -H "Authorization: Bearer $TOKEN")

echo "Response: $PROFILE_RESPONSE"

echo ""
echo "4. Testing Unauthorized Access..."
echo "---------------------------------"
UNAUTHORIZED_RESPONSE=$(curl -s -X GET $BASE_URL/auth/profile)
echo "Response: $UNAUTHORIZED_RESPONSE"

echo ""
echo "5. Testing Duplicate Username Registration..."
echo "---------------------------------------------"
DUPLICATE_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"demo_user","password":"differentpass","email":"different@example.com"}')

echo "Response: $DUPLICATE_RESPONSE"

echo ""
echo "✅ Authentication System Test Complete!"
echo "======================================" 