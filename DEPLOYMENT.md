# Deployment Guide

This guide will help you deploy your Pidoxy website to various hosting platforms.

## Prerequisites

1. **GitHub Repository**: Make sure your code is pushed to a GitHub repository
2. **Sanity Project**: Ensure your Sanity project is set up and configured
3. **Environment Variables**: You'll need your Sanity project ID and dataset

## Environment Variables Required

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Hosting Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Created by the Next.js team
- Optimized for Next.js applications
- Free tier with generous limits
- Automatic deployments from GitHub
- Built-in analytics and performance monitoring

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Click "Deploy"

**Custom Domain:**
- After deployment, go to Project Settings → Domains
- Add your custom domain

### 2. Netlify

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Add environment variables in Site Settings → Environment Variables
7. Deploy

### 3. Railway

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables in the Variables tab
5. Deploy

## Pre-deployment Checklist

- [ ] All code is committed to GitHub
- [ ] Environment variables are configured
- [ ] Sanity project is set up and has content
- [ ] Test the build locally: `npm run build`
- [ ] Check that all images and content load correctly

## Post-deployment

1. **Test all pages**: Navigate through your website
2. **Check images**: Ensure Sanity images load correctly
3. **Test forms**: If you have any contact forms
4. **Performance**: Use Lighthouse to check performance
5. **SEO**: Verify meta tags and structured data

## Troubleshooting

### Common Issues:

1. **Images not loading**: Check Sanity project ID and dataset
2. **Build errors**: Ensure all dependencies are in package.json
3. **Environment variables**: Make sure they're set in your hosting platform
4. **404 errors**: Check that all pages are properly exported

### Getting Help:

- Check the hosting platform's documentation
- Review Next.js deployment guides
- Check Sanity documentation for CMS setup

## Custom Domain Setup

After deployment, you can add a custom domain:

1. **Vercel**: Project Settings → Domains
2. **Netlify**: Site Settings → Domain Management
3. **Railway**: Project Settings → Domains

## Analytics and Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics (if using Vercel)
- Error tracking (Sentry)
- Performance monitoring

## Updates and Maintenance

- Push changes to GitHub for automatic deployments
- Monitor your hosting platform's dashboard
- Keep dependencies updated
- Regular backups of your Sanity content 