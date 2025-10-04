# 🚀 Quick Deploy Scripts

## Build Production

```bash
npm run build
```

## Deploy to Different Platforms

### Vercel
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login (first time only)
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify via CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### GitHub Pages
```bash
# Make sure you've updated homepage in package.json
# Then run:
npm run deploy
```

### Render / Railway
- Just push to GitHub
- Platform will auto-deploy

---

## 📦 Build Size Optimization

Current build includes:
- React 18
- React Router DOM
- CSS files

Estimated build size: ~200KB gzipped

---

## 🔍 Pre-deploy Checklist

Run these commands before deploying:

```bash
# 1. Check for errors
npm run build

# 2. Test production build locally
npx serve -s build

# 3. Check build size
du -sh build
```

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### For GitHub Pages:
1. Add `CNAME` file in `public/` folder with your domain
2. Update DNS:
   ```
   A Record → 185.199.108.153
   A Record → 185.199.109.153
   A Record → 185.199.110.153
   A Record → 185.199.111.153
   ```

---

## 🎯 Recommended: Deploy to Vercel (Fastest)

```bash
# One-time setup
npm install -g vercel
vercel login

# Every time you want to deploy
git add .
git commit -m "Update"
git push

# Or manual deploy
vercel --prod
```

Your site will be live at: `https://your-project.vercel.app`
