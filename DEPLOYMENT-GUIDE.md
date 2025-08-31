# 🚀 CHUBKO Portfolio - Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ Required Steps Before Deployment:

1. **Update Formspree Form ID**
   ```typescript
   // In app/(home)/components/ContactForm.tsx
   const [state, handleFormspreeSubmit] = useForm("YOUR_ACTUAL_FORM_ID")
   ```

2. **Update Repository URL**
   ```json
   // In package.json
   "repository": {
     "url": "https://github.com/YOUR_USERNAME/chubko-portfolio.git"
   }
   ```

3. **Set Up Environment Variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

## 🐙 GitHub Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: CHUBKO Portfolio website"
```

### 2. Create GitHub Repository
```bash
# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/chubko-portfolio.git
git branch -M main
git push -u origin main
```

### 3. GitHub Repository Settings
- **Repository name**: `chubko-portfolio`
- **Description**: "CHUBKO - Creative Graphic Design Studio Portfolio"
- **Topics**: `portfolio`, `graphic-design`, `nextjs`, `typescript`, `tailwind`
- **Website**: `https://chubko.design`

## ▲ Vercel Deployment

### Method 1: Vercel Dashboard (Recommended)
1. **Visit**: [vercel.com](https://vercel.com)
2. **Sign up/Login** with GitHub
3. **Import Project**: Select your GitHub repository
4. **Configure**:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
npm run deploy:vercel
```

### Environment Variables (Vercel Dashboard):
```
NEXT_PUBLIC_FORMSPREE_FORM_ID = your-formspree-form-id
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
```

### Custom Domain (Optional):
1. **Vercel Dashboard** → **Domains**
2. **Add Domain**: `chubko.design`
3. **Configure DNS** as instructed

## 🌐 Netlify Deployment

### Method 1: Netlify Dashboard (Recommended)
1. **Visit**: [netlify.com](https://netlify.com)
2. **Sign up/Login** with GitHub
3. **New site from Git**: Select your GitHub repository
4. **Build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`

### Method 2: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
npm run deploy:netlify
```

### Environment Variables (Netlify Dashboard):
```
NEXT_PUBLIC_FORMSPREE_FORM_ID = your-formspree-form-id
NEXT_PUBLIC_SITE_URL = https://your-site.netlify.app
```

### Netlify Forms (Alternative to Formspree):
If you want to use Netlify Forms instead of Formspree:

1. **Update ContactForm.tsx**:
```typescript
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  // ... rest of form
</form>
```

2. **Enable in netlify.toml** (uncomment forms section)

## 🔧 Performance Optimization

### Install Sharp (Recommended):
```bash
npm install sharp
```

### Build Analysis:
```bash
npm run build:analyze
```

## 🧪 Testing Deployment

### Local Production Test:
```bash
npm run prepare:deploy
npm run preview
```

### Lighthouse Testing:
```bash
npm install -g @lhci/cli
npm run test:lighthouse
```

## 📊 Deployment Verification

### ✅ Post-Deployment Checklist:

1. **Functionality**:
   - [ ] Website loads correctly
   - [ ] All sections scroll smoothly
   - [ ] Contact form submits successfully
   - [ ] Dark/light mode toggle works
   - [ ] Portfolio modal opens/closes
   - [ ] Mobile responsive design

2. **Performance**:
   - [ ] Lighthouse Performance > 90
   - [ ] First Contentful Paint < 2s
   - [ ] Largest Contentful Paint < 3s
   - [ ] Images load quickly

3. **SEO**:
   - [ ] Meta tags appear in source
   - [ ] OpenGraph preview works (test with social media)
   - [ ] Favicon displays correctly
   - [ ] robots.txt accessible

4. **Forms**:
   - [ ] Contact form sends emails
   - [ ] Validation works correctly
   - [ ] Success/error messages display

## 🛠️ Troubleshooting

### Common Issues:

#### Build Fails:
```bash
npm run clean
npm install
npm run type-check
npm run build
```

#### Environment Variables Not Working:
- Ensure variables start with `NEXT_PUBLIC_`
- Restart development server after changes
- Check deployment platform environment settings

#### Images Not Loading:
- Verify images are in `/public` directory
- Check Next.js image optimization settings
- Ensure proper file permissions

#### Contact Form Not Working:
- Verify Formspree form ID is correct
- Check CORS settings on Formspree
- Test form in incognito mode

## 🔄 Continuous Deployment

### Automatic Deployment:
- **Vercel**: Auto-deploys on `git push` to main branch
- **Netlify**: Auto-deploys on `git push` to main branch
- **GitHub Actions**: Runs tests and builds on every push

### Manual Deployment:
```bash
# Prepare for deployment
npm run prepare:deploy

# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify  
npm run deploy:netlify
```

## 📈 Monitoring & Analytics

### Vercel Analytics:
- Already integrated in the code
- View analytics in Vercel dashboard

### Google Analytics (Optional):
1. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to environment variables
2. Update layout.tsx with Google Analytics script

### Performance Monitoring:
- Use Vercel Speed Insights
- Monitor Core Web Vitals
- Set up error tracking (Sentry)

## 🎯 Production URLs

After deployment, your site will be available at:

- **Vercel**: `https://chubko-portfolio.vercel.app`
- **Netlify**: `https://chubko-portfolio.netlify.app`
- **Custom Domain**: `https://chubko.design`

## 🔒 Security

### Environment Variables:
- Never commit `.env.local` to Git
- Use platform-specific environment variable settings
- Rotate API keys regularly

### Headers:
Security headers are configured in:
- `vercel.json` for Vercel
- `netlify.toml` for Netlify
- `next.config.mjs` for all platforms

---

**Ready to deploy! 🚀**

Choose your preferred platform and follow the steps above. Both Vercel and Netlify offer excellent Next.js support with automatic deployments from GitHub.
