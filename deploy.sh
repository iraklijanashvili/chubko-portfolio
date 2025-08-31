#!/bin/bash

# CHUBKO Portfolio Deployment Script
# Usage: ./deploy.sh [vercel|netlify|github]

set -e

echo "🚀 CHUBKO Portfolio Deployment Script"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if deployment target is provided
DEPLOY_TARGET=${1:-"help"}

if [ "$DEPLOY_TARGET" = "help" ]; then
    echo "Usage: ./deploy.sh [vercel|netlify|github]"
    echo ""
    echo "Options:"
    echo "  vercel   - Deploy to Vercel"
    echo "  netlify  - Deploy to Netlify"
    echo "  github   - Push to GitHub (for auto-deployment)"
    echo ""
    exit 0
fi

# Pre-deployment checks
echo ""
print_info "Running pre-deployment checks..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ required. Current version: $(node --version)"
    exit 1
fi

print_status "Node.js version check passed"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    npm install
fi

print_status "Dependencies check passed"

# Run pre-deployment preparation
print_info "Running pre-deployment preparation..."
npm run prepare:deploy

print_status "Build completed successfully!"

# Deployment based on target
case $DEPLOY_TARGET in
    "vercel")
        print_info "Deploying to Vercel..."
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        
        # Deploy to Vercel
        vercel --prod
        print_status "Deployed to Vercel successfully!"
        ;;
        
    "netlify")
        print_info "Deploying to Netlify..."
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            print_warning "Netlify CLI not found. Installing..."
            npm install -g netlify-cli
        fi
        
        # Deploy to Netlify
        netlify deploy --prod
        print_status "Deployed to Netlify successfully!"
        ;;
        
    "github")
        print_info "Pushing to GitHub..."
        
        # Check if git is initialized
        if [ ! -d ".git" ]; then
            print_info "Initializing Git repository..."
            git init
            git add .
            git commit -m "Initial commit: CHUBKO Portfolio website"
        else
            # Add and commit changes
            git add .
            git commit -m "Update: Ready for deployment - $(date '+%Y-%m-%d %H:%M:%S')"
        fi
        
        # Push to GitHub (assumes remote is already set up)
        if git remote get-url origin &> /dev/null; then
            git push origin main
            print_status "Pushed to GitHub successfully!"
            print_info "Auto-deployment should trigger on Vercel/Netlify if configured"
        else
            print_warning "No Git remote found. Please set up GitHub repository first:"
            echo "git remote add origin https://github.com/iraklijanashvili/CHUBKO-1.git"
            echo "git push -u origin main"
        fi
        ;;
        
    *)
        print_error "Invalid deployment target: $DEPLOY_TARGET"
        echo "Use: ./deploy.sh [vercel|netlify|github]"
        exit 1
        ;;
esac

echo ""
print_status "Deployment process completed!"
echo ""
print_info "Next steps:"
echo "1. Update Formspree form ID in ContactForm.tsx"
echo "2. Set up environment variables on your deployment platform"
echo "3. Configure custom domain (optional)"
echo "4. Test the deployed website thoroughly"
echo ""
print_info "Happy deploying! 🎉"
