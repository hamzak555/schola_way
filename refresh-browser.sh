#!/bin/bash

echo "🔄 Checking server status and refreshing browser..."

# First, verify the server is accessible
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Server is accessible"
    
    # Use AppleScript to refresh the Chrome tab
    osascript -e '
    tell application "Google Chrome"
        set found to false
        repeat with w in windows
            repeat with t in tabs of w
                if URL of t contains "localhost:3000" then
                    tell t to reload
                    set found to true
                    exit repeat
                end if
            end repeat
            if found then exit repeat
        end repeat
        
        if not found then
            # If no localhost:3000 tab found, open a new one
            open location "http://localhost:3000"
        end if
        activate
    end tell
    '
    echo "🎉 Browser refreshed successfully!"
else
    echo "❌ Server is not accessible on localhost:3000"
    echo "🚨 Please run the start-and-open.sh script first to start the server"
    echo "💡 Or run: npm start"
fi