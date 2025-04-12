# TECHAIDpro

A modern technology news and insights platform built with Next.js.

## Deployment Options

### Option 1: Deploy with Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```
   bun add -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy your site:
   ```
   vercel
   ```
5. For production deployment:
   ```
   vercel --prod
   ```

### Option 2: Deploy with Netlify

1. Create an account on [Netlify](https://netlify.com)
2. Install the Netlify CLI:
   ```
   bun add -g netlify-cli
   ```
3. Login to Netlify:
   ```
   netlify login
   ```
4. Deploy your site:
   ```
   netlify deploy
   ```
5. For production deployment:
   ```
   netlify deploy --prod
   ```

### Option 3: GitHub Pages with GitHub Actions

1. Push your code to a GitHub repository
2. Create a `.github/workflows/deploy.yml` file with the following content (already included in this repository)
3. Enable GitHub Pages in your repository settings

## Environment Variables

If your application uses environment variables, make sure to set them up in your deployment platform:

- Vercel: Set environment variables in the Vercel dashboard or using the CLI
- Netlify: Set environment variables in the Netlify dashboard or using the netlify.toml file
- GitHub Pages: Set secrets in your repository settings

## Custom Domain

To use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. Configure the domain in your deployment platform
3. Update your DNS settings according to the platform's instructions

## Continuous Deployment

All the recommended platforms support continuous deployment from GitHub. Connect your repository to automatically deploy when you push changes to your main branch.

## Quick Deploy

Run the deployment helper script:

```
node scripts/deploy.js
```

This script will guide you through the deployment process for your chosen platform.
