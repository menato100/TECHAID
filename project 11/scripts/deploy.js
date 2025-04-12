#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('TECHAIDpro Deployment Helper');
console.log('============================');
console.log('');
console.log('Choose a deployment platform:');
console.log('1. Vercel (Recommended for Next.js)');
console.log('2. Netlify');
console.log('3. GitHub Pages');
console.log('');

rl.question('Enter your choice (1-3): ', (choice) => {
  switch(choice) {
    case '1':
      deployToVercel();
      break;
    case '2':
      deployToNetlify();
      break;
    case '3':
      deployToGitHubPages();
      break;
    default:
      console.log('Invalid choice. Exiting.');
      process.exit(1);
  }
  
  rl.close();
});

function deployToVercel() {
  console.log('\nDeploying to Vercel...');
  
  try {
    // Check if Vercel CLI is installed
    try {
      execSync('vercel --version', { stdio: 'ignore' });
    } catch (error) {
      console.log('Installing Vercel CLI...');
      execSync('bun add -g vercel', { stdio: 'inherit' });
    }
    
    // Deploy to Vercel
    console.log('\nStarting deployment process...');
    execSync('vercel', { stdio: 'inherit' });
    
    console.log('\nDeployment initiated! Follow the instructions in the terminal.');
    console.log('To deploy to production, run: vercel --prod');
    
  } catch (error) {
    console.error('Error deploying to Vercel:', error.message);
  }
}

function deployToNetlify() {
  console.log('\nDeploying to Netlify...');
  
  try {
    // Check if Netlify CLI is installed
    try {
      execSync('netlify --version', { stdio: 'ignore' });
    } catch (error) {
      console.log('Installing Netlify CLI...');
      execSync('bun add -g netlify-cli', { stdio: 'inherit' });
    }
    
    // Deploy to Netlify
    console.log('\nStarting deployment process...');
    execSync('netlify deploy', { stdio: 'inherit' });
    
    console.log('\nDeployment initiated! Follow the instructions in the terminal.');
    console.log('To deploy to production, run: netlify deploy --prod');
    
  } catch (error) {
    console.error('Error deploying to Netlify:', error.message);
  }
}

function deployToGitHubPages() {
  console.log('\nPreparing for GitHub Pages deployment...');
  
  try {
    // Check if git is initialized
    try {
      execSync('git status', { stdio: 'ignore' });
    } catch (error) {
      console.log('Initializing git repository...');
      execSync('git init', { stdio: 'inherit' });
    }
    
    console.log('\nTo deploy to GitHub Pages:');
    console.log('1. Create a GitHub repository');
    console.log('2. Add the repository as a remote: git remote add origin YOUR_REPO_URL');
    console.log('3. Create a .github/workflows/deploy.yml file (see README.md for content)');
    console.log('4. Commit and push your changes:');
    console.log('   git add .');
    console.log('   git commit -m "Initial commit"');
    console.log('   git push -u origin main');
    console.log('5. Enable GitHub Pages in your repository settings');
    
  } catch (error) {
    console.error('Error preparing for GitHub Pages:', error.message);
  }
}
