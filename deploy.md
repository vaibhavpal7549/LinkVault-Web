# LinkVault Website — Deployment Guide (`deploy.md`)

This document provides step-by-step instructions for building and deploying the **LinkVault** website to production hosting platforms.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have updated the centralized configuration file with your real production details:

1. Open `src/data/config.ts`.
2. Update the following configuration constants:

```typescript
export const CONFIG = {
  PRODUCT_NAME: "LinkVault",
  PRODUCT_TAGLINE: "Your professional links, always within reach.",
  PRODUCT_DESCRIPTION: "LinkVault is a Chrome extension that lets users save, organize, and quickly copy their important professional links from one place.",
  CHROME_WEB_STORE_URL: "https://chromewebstore.google.com/detail/linkvault/YOUR_REAL_EXTENSION_ID",
  SUPPORT_EMAIL: "[EMAIL_ADDRESS]",
  PRIVACY_EMAIL: "[EMAIL_ADDRESS]",
  SITE_URL: "https://linkvault.app",
};
```

---

## 🛠️ Building for Production

To compile the production build:

```bash
# Navigate to the website project directory
cd "d:\LinkVault Web"

# Install dependencies (if not already installed)
npm install

# Run TypeScript check and Vite production build
npm run build
```

This generates an optimized static output folder named `dist/` containing:
- `index.html`
- Optimized CSS (`dist/assets/*.css`)
- Bundled JS (`dist/assets/*.js`)
- Static assets (`favicon.svg`, `robots.txt`, `sitemap.xml`)

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for React + Vite)

Vercel provides automatic deployments and URL rewrites for Single Page Applications (SPAs).

#### Via Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

#### Via Vercel Dashboard:
1. Import your GitHub / GitLab repository in Vercel.
2. Configure settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**.

> **Note for SPA Routing on Vercel**: Create a `vercel.json` file in the project root to ensure clean reloads for routes like `/privacy`, `/terms`, `/support`, and `/about`:
> ```json
> {
>   "rewrites": [
>     { "source": "/(.*)", "destination": "/index.html" }
>   ]
> }
> ```

---

### Option 2: Netlify

Netlify is ideal for hosting static Vite SPA sites.

#### Via Netlify Dashboard:
1. Connect your repository to Netlify.
2. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

> **Note for SPA Routing on Netlify**: Add a `public/_redirects` file:
> ```text
> /*    /index.html   200
> ```

---

### Option 3: Cloudflare Pages

1. Log in to the Cloudflare Dashboard -> **Workers & Pages** -> **Create Application** -> **Pages**.
2. Connect your Git repository.
3. Build Settings:
   - **Framework Preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

### Option 4: GitHub Pages

To deploy using GitHub Pages:

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Execute deployment:
   ```bash
   npm run deploy
   ```

---

### Option 5: Nginx / Traditional Web Server

If deploying to your own Virtual Private Server (VPS) running Nginx:

1. Upload the contents of the `dist/` directory to `/var/www/linkvault-web`.
2. Configure your Nginx block (`/etc/nginx/sites-available/linkvault`):

```nginx
server {
    listen 80;
    server_name linkvault.app www.linkvault.app;

    root /var/www/linkvault-web;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

3. Enable configuration & reload Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/linkvault /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## 🔍 Post-Deployment Verification

After deploying your website:

- [ ] Test home page loading at your domain root (`/`).
- [ ] Test deep route reloads: `/privacy`, `/terms`, `/support`, `/about`.
- [ ] Verify Chrome Web Store CTA buttons link to `CHROME_WEB_STORE_URL`.
- [ ] Verify support email links open `mailto:SUPPORT_EMAIL`.
- [ ] Verify `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt`.
- [ ] Test mobile responsiveness and hamburger menu drawer on mobile browsers.
