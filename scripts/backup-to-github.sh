#!/usr/bin/env bash
# One-time script to push this repo to the nuswalab_backup GitHub repo.
# Run this from your LOCAL machine (not the Vercel/cloud environment).
#
# Prerequisites:
#   - git installed locally
#   - GitHub personal access token (PAT) with "repo" scope for rikoconstantine10-ops
#
# Usage:
#   export GITHUB_TOKEN=your_pat_here
#   bash scripts/backup-to-github.sh

set -e

BACKUP_REPO="https://x-access-token:${GITHUB_TOKEN}@github.com/rikoconstantine10-ops/nuswalab_backup.git"

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN environment variable is not set."
  echo "Create a PAT at https://github.com/settings/tokens and export it:"
  echo "  export GITHUB_TOKEN=your_token_here"
  exit 1
fi

echo "Adding backup remote..."
git remote remove backup 2>/dev/null || true
git remote add backup "$BACKUP_REPO"

echo "Pushing main branch to nuswalab_backup..."
git push backup main --force

echo "Done! Backup pushed to https://github.com/rikoconstantine10-ops/nuswalab_backup"

git remote remove backup
