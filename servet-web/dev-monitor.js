#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

// Timestamp function
function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

// Log with color
function log(message, color = colors.white) {
  console.log(`${color}[${getTimestamp()}] ${message}${colors.reset}`);
}

// Create error log file
const errorLogPath = path.join(__dirname, 'dev-errors.log');
const errorStream = fs.createWriteStream(errorLogPath, { flags: 'a' });

console.log(`${colors.cyan}${colors.bright}
╔═══════════════════════════════════════════════════════╗
║          🚀 Schola Way Development Monitor            ║
╚═══════════════════════════════════════════════════════╝
${colors.reset}`);

log('Starting development server with error monitoring...', colors.blue);
log(`Error log: ${errorLogPath}`, colors.cyan);
log('Press Ctrl+C to stop\n', colors.cyan);

// Start the React development server
const server = spawn('npm', ['start'], {
  shell: true,
  env: { ...process.env, BROWSER: 'none', CI: 'true' }
});

let isCompiling = false;
let hasErrors = false;
let errorBuffer = [];

// Process stdout
server.stdout.on('data', (data) => {
  const output = data.toString();
  
  // Detect compilation start
  if (output.includes('Compiling...')) {
    isCompiling = true;
    hasErrors = false;
    errorBuffer = [];
    log('⏳ Compiling...', colors.yellow);
  }
  
  // Detect successful compilation
  if (output.includes('Compiled successfully!')) {
    isCompiling = false;
    log('✅ Compiled successfully!', colors.green + colors.bright);
    log('📱 Local: http://localhost:3000', colors.cyan);
    log('📡 Network: http://localhost:3000\n', colors.cyan);
  }
  
  // Detect compilation with warnings
  if (output.includes('Compiled with warnings')) {
    isCompiling = false;
    log('⚠️  Compiled with warnings', colors.yellow);
  }
  
  // Detect server info
  if (output.includes('On Your Network:')) {
    const networkMatch = output.match(/On Your Network:\s*(http:\/\/[\d.]+:\d+)/);
    if (networkMatch) {
      log(`📡 Network: ${networkMatch[1]}`, colors.cyan);
    }
  }
  
  // Pass through other output
  if (!output.includes('webpack') && !output.includes('emitted')) {
    process.stdout.write(output);
  }
});

// Process stderr for errors
server.stderr.on('data', (data) => {
  const error = data.toString();
  hasErrors = true;
  errorBuffer.push(error);
  
  // Write to error log
  errorStream.write(`[${getTimestamp()}] ${error}\n`);
  
  // Parse and display errors
  if (error.includes('ERROR in')) {
    console.log(`\n${colors.red}${colors.bright}════════════════════════════════════════${colors.reset}`);
    log('❌ Compilation Error', colors.red + colors.bright);
    console.log(`${colors.red}${colors.bright}════════════════════════════════════════${colors.reset}\n`);
  }
  
  // TypeScript errors
  if (error.includes('TS')) {
    const lines = error.split('\n');
    lines.forEach(line => {
      if (line.includes('ERROR in')) {
        const fileMatch = line.match(/ERROR in (.+)/);
        if (fileMatch) {
          log(`📁 File: ${fileMatch[1]}`, colors.magenta);
        }
      } else if (line.includes('TS')) {
        log(`🔧 ${line.trim()}`, colors.red);
      } else if (line.trim()) {
        console.log(`   ${line}`);
      }
    });
  }
  
  // Module not found errors
  if (error.includes('Module not found')) {
    log('📦 Module not found error', colors.red);
    console.log(error);
  }
  
  // Generic error output
  if (!error.includes('TS') && !error.includes('Module not found')) {
    process.stderr.write(`${colors.red}${error}${colors.reset}`);
  }
});

// Summary when errors finish
let errorTimer;
server.stderr.on('data', () => {
  clearTimeout(errorTimer);
  errorTimer = setTimeout(() => {
    if (hasErrors && errorBuffer.length > 0) {
      console.log(`\n${colors.red}════════════════════════════════════════${colors.reset}`);
      log(`Total errors found. Check ${errorLogPath} for details.`, colors.yellow);
      console.log(`${colors.red}════════════════════════════════════════${colors.reset}\n`);
    }
  }, 1000);
});

// Handle process termination
process.on('SIGINT', () => {
  log('\n👋 Stopping development server...', colors.yellow);
  errorStream.end();
  server.kill();
  process.exit();
});

// Handle server errors
server.on('error', (error) => {
  log(`Failed to start server: ${error.message}`, colors.red);
  errorStream.end();
  process.exit(1);
});

server.on('close', (code) => {
  if (code !== 0 && code !== null) {
    log(`Server exited with code ${code}`, colors.red);
  }
  errorStream.end();
  process.exit(code || 0);
});