#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('Starting development server...');

// Start the server with proper environment setup
const server = spawn('npm', ['start'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    BROWSER: 'none', // Prevent auto-opening browser
    FAST_REFRESH: 'true'
  }
});

// Handle termination
process.on('SIGINT', () => {
  console.log('\nStopping server...');
  server.kill();
  process.exit();
});

server.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});