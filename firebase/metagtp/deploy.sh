#!/bin/bash

echo "🚀 Building GoMakeAI Project..."

# Replace these with your actual build commands if you're using Vite, Next.js, etc.
# Example:
# cd apps/meta-gpt && npm run build && cd ../..

echo "📦 Copying builds to Firebase public folders..."
rm -rf firebase/build
mkdir -p firebase/build/default
mkdir -p firebase/build/metagtp

# Placeholder content — replace with actual build output if needed
echo "<h1>Landing Page (default)</h1>" > firebase/build/default/index.html
echo "<h1>MetaGTP Chat Page</h1>" > firebase/build/metagtp/index.html

echo "🔥 Deploying to Firebase..."
cd firebase
firebase deploy --only hosting
cd ..

echo "✅ Deploy complete. Live at: https://gomakeai-dashboard.web.app"
