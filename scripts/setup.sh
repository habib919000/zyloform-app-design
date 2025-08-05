#!/bin/bash

# Zyloform Setup Script

echo "Setting up Zyloform App..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories if they don't exist
echo "Creating necessary directories..."
mkdir -p public

# Build the application
echo "Building the application..."
npm run build

# Run tests
echo "Running tests..."
npm test

echo "Setup complete! You can now start the development server with 'npm run dev'"