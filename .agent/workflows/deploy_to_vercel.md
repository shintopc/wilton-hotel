---
description: How to deploy the Wilton Hotel website to Vercel
---

# Deploying Wilton Hotel to Vercel

Vercel is the creators of Next.js and provides the best hosting experience for this project. Since your code is already on GitHub, deployment is automated.

## Prerequisites
- A [Vercel Account](https://vercel.com/signup)
- The [GitHub Repository](https://github.com/shintopc/wilton-hotel) created in the previous step

## Step-by-Step Guide

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com) and log in.
   - It is recommended to log in with your **GitHub** account for seamless integration.

2. **Import Project**
   - On your Vercel dashboard, click **"Add New..."** > **"Project"**.
   - You will see a list of your GitHub repositories.
   - Find `wilton-hotel` and click **"Import"**.

3. **Configure Project**
   - **Framework Preset**: Ensure `Next.js` is selected (Vercel usually detects this automatically).
   - **Root Directory**: Leave as `./`.
   - **Environment Variables**: This project uses standard configuration, so no extra variables are needed right now.
   - Click **"Deploy"**.

4. **Wait for Build**
   - Vercel will clone, build, and deploy your site.
   - This typically takes about 1-2 minutes.
   - You will see a "Congratulations!" screen when finished.

5. **Verify Deployment**
   - Click on the screenshot of your website to visit the live URL (e.g., `wilton-hotel.vercel.app`).
   - Test the "Book via WhatsApp" buttons to ensure they open WhatsApp correctly.

## Automatic Updates
- Now that Vercel is connected to GitHub, every time you `git push` changes to the `main` branch, Vercel will automatically rebuild and update your live website!
