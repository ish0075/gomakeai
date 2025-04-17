#!/bin/bash

echo "🚀 Building GoMakeAI Project..."

# Skip build if already built in Vite — we're only deploying the dist
echo "📦 Copying builds to Firebase public folders..."
rm -rf public
mkdir -p public
cp -r build/metagtp/* public/

echo "🔥 Deploying to Firebase..."
firebase deploy --only hosting

echo "✅ Deploy complete. Live at: https://gomakeai-dashboard.web.app"
