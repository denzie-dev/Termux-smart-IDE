#!/data/data/com.termux/files/usr/bin/bash
echo "🚀 Push received at $(date)" >> 
../logs/automation.log
git pull origin main >> ../logs/automation.log 2>&1
