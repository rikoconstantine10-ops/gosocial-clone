#!/bin/bash
# Setup script for daily-article-gen.js
# Run ONCE on VPS: bash scripts/setup-article-gen.sh

set -e

echo "=== Setting up Daily Article Generator ==="

cd /home/ubuntu/nuswalab

# Install dependencies
echo "→ Installing npm packages..."
npm install rss-parser @anthropic-ai/sdk

# Create logs directory
mkdir -p logs

# Create .env.local entry if not exists
if ! grep -q "ANTHROPIC_API_KEY" .env.local 2>/dev/null; then
  echo "" >> .env.local
  echo "# Daily Article Generator" >> .env.local
  echo "ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE" >> .env.local
  echo "→ Added ANTHROPIC_API_KEY placeholder to .env.local — fill it in!"
else
  echo "→ ANTHROPIC_API_KEY already in .env.local"
fi

# Test run in dry mode
echo ""
echo "→ Running DRY RUN test..."
DRY_RUN=1 ANTHROPIC_API_KEY=$(grep ANTHROPIC_API_KEY .env.local | cut -d= -f2) \
  node scripts/daily-article-gen.js

echo ""
echo "=== Setup complete ==="
echo ""
echo "Next steps:"
echo "1. Edit .env.local and set your real ANTHROPIC_API_KEY"
echo "2. Run manually to test: ANTHROPIC_API_KEY=sk-ant-xxx node scripts/daily-article-gen.js"
echo "3. Add to crontab: crontab -e"
echo ""
echo "   Crontab entry (daily at 02:00 WIB = 19:00 UTC):"
echo "   0 19 * * * cd /home/ubuntu/nuswalab && ANTHROPIC_API_KEY=sk-ant-xxx node scripts/daily-article-gen.js >> logs/article-gen.log 2>&1"
echo ""
echo "4. Optional — publish as draft first for review:"
echo "   ARTICLE_STATUS=draft ANTHROPIC_API_KEY=sk-ant-xxx node scripts/daily-article-gen.js"
