#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if chalk is installed, if not use basic colors
let chalk;
try {
  chalk = require('chalk');
} catch (e) {
  // Fallback to basic ANSI colors
  chalk = {
    red: { bold: (str) => `\x1b[31m\x1b[1m${str}\x1b[0m` },
    green: { bold: (str) => `\x1b[32m\x1b[1m${str}\x1b[0m` },
    yellow: { bold: (str) => `\x1b[33m\x1b[1m${str}\x1b[0m` },
    blue: { bold: (str) => `\x1b[34m\x1b[1m${str}\x1b[0m` },
    cyan: (str) => `\x1b[36m${str}\x1b[0m`,
    gray: (str) => `\x1b[90m${str}\x1b[0m`,
    red: (str) => `\x1b[31m${str}\x1b[0m`,
    green: (str) => `\x1b[32m${str}\x1b[0m`,
    yellow: (str) => `\x1b[33m${str}\x1b[0m`,
  };
}

console.log(chalk.blue.bold('\n🔍 Error Monitor for Schola Way\n'));
console.log(chalk.gray('Monitoring compilation errors in real-time...\n'));

// Create error log file
const errorLogPath = path.join(__dirname, 'error-log.txt');
const errorStream = fs.createWriteStream(errorLogPath, { flags: 'a' });

// Function to format timestamp
function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').substr(0, 19);
}

// Function to log errors
function logError(type, message) {
  const timestamp = getTimestamp();
  const logMessage = `[${timestamp}] ${type}: ${message}\n`;
  
  // Write to file
  errorStream.write(logMessage);
  
  // Display in console with colors
  switch(type) {
    case 'ERROR':
      console.log(chalk.red.bold(`[${timestamp}] ${type}:`), chalk.red(message));
      break;
    case 'WARNING':
      console.log(chalk.yellow.bold(`[${timestamp}] ${type}:`), chalk.yellow(message));
      break;
    case 'SUCCESS':
      console.log(chalk.green.bold(`[${timestamp}] ${type}:`), chalk.green(message));
      break;
    default:
      console.log(chalk.gray(`[${timestamp}] ${type}:`), message);
  }
}

// Start the React development server
const reactProcess = spawn('npm', ['start'], {
  shell: true,
  env: { ...process.env, BROWSER: 'none' }
});

let errorBuffer = '';
let isCompiling = false;
let errorCount = 0;
let warningCount = 0;

// Monitor stdout
reactProcess.stdout.on('data', (data) => {
  const output = data.toString();
  
  // Check for compilation start
  if (output.includes('Compiling...')) {
    isCompiling = true;
    errorCount = 0;
    warningCount = 0;
    console.log(chalk.blue('\n⏳ Compiling...'));
  }
  
  // Check for successful compilation
  if (output.includes('Compiled successfully!')) {
    isCompiling = false;
    logError('SUCCESS', 'Compiled successfully! The app is running at http://localhost:3000');
    console.log(chalk.green.bold('\n✅ No errors found!\n'));
  }
  
  // Check for warnings
  if (output.includes('Compiled with warnings')) {
    logError('WARNING', 'Compiled with warnings - check console for details');
  }
  
  // Display server info
  if (output.includes('You can now view')) {
    console.log(chalk.cyan('\n📱 Server Info:'));
    console.log(output);
  }
});

// Monitor stderr for errors
reactProcess.stderr.on('data', (data) => {
  const error = data.toString();
  errorBuffer += error;
  
  // Parse TypeScript/ESLint errors
  if (error.includes('ERROR in')) {
    errorCount++;
    const errorLines = error.split('\n');
    errorLines.forEach(line => {
      if (line.includes('ERROR in')) {
        const match = line.match(/ERROR in (.+)/);
        if (match) {
          logError('ERROR', `File: ${match[1]}`);
        }
      } else if (line.includes('TS') && line.includes(':')) {
        const tsMatch = line.match(/TS(\d+):\s*(.+)/);
        if (tsMatch) {
          logError('ERROR', `TypeScript TS${tsMatch[1]}: ${tsMatch[2]}`);
        }
      }
    });
  }
  
  // Parse warnings
  if (error.includes('WARNING')) {
    warningCount++;
    logError('WARNING', error.trim());
  }
  
  // Parse general errors
  if (error.includes('Module not found')) {
    errorCount++;
    logError('ERROR', 'Module not found - check your imports');
  }
  
  if (error.includes('Failed to compile')) {
    logError('ERROR', 'Failed to compile - see errors above');
    console.log(chalk.red.bold(`\n❌ Compilation failed with ${errorCount} error(s) and ${warningCount} warning(s)!\n`));
  }
});

// Clean exit handling
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n\n👋 Stopping error monitor...'));
  console.log(chalk.gray(`Errors logged to: ${errorLogPath}`));
  errorStream.end();
  reactProcess.kill();
  process.exit();
});

// Handle process errors
reactProcess.on('error', (error) => {
  logError('ERROR', `Failed to start development server: ${error.message}`);
  process.exit(1);
});

reactProcess.on('close', (code) => {
  if (code !== 0 && code !== null) {
    logError('ERROR', `Development server exited with code ${code}`);
  }
  errorStream.end();
  process.exit(code);
});

// Initial message
console.log(chalk.cyan('💡 Tips:'));
console.log(chalk.gray('  - Errors will be logged to error-log.txt'));
console.log(chalk.gray('  - Press Ctrl+C to stop monitoring'));
console.log(chalk.gray('  - The browser will not open automatically'));
console.log(chalk.gray('  - TypeScript errors will be highlighted\n'));