#!/bin/bash

echo "🚀 Starting Schola Way development server..."

# Kill any existing processes on port 3000
echo "🔍 Checking for existing server processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Wait a moment for port to be freed
sleep 2

# Change to project directory
cd /Users/hamzakhalid/Desktop/Schola_Way/servet-web

# Start the development server in background
echo "📡 Starting development server..."
export BROWSER=none
npm start > server.log 2>&1 &

# Store the server PID
SERVER_PID=$!

# Wait for server to be ready with timeout
echo "⏳ Waiting for server to be ready..."
COUNTER=0
MAX_WAIT=60

while ! curl -s http://localhost:3000 > /dev/null 2>&1 && [ $COUNTER -lt $MAX_WAIT ]; do
    sleep 1
    COUNTER=$((COUNTER + 1))
    
    # Show progress every 10 seconds
    if [ $((COUNTER % 10)) -eq 0 ]; then
        echo "⏳ Still waiting... (${COUNTER}/${MAX_WAIT}s)"
    fi
done

if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Server is ready! Opening browser..."
    open http://localhost:3000
    echo "🎉 Success! Server is running on http://localhost:3000"
    echo "📋 Server PID: $SERVER_PID"
    echo "📄 Server logs: server.log"
    echo "🔄 To refresh after changes, run: ./refresh-browser.sh"
else
    echo "❌ Server failed to start within $MAX_WAIT seconds"
    echo "📄 Check server.log for errors"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

# Keep the script running to maintain the server
wait $SERVER_PID