# 🚨 404 Error Fix - Deployment Guide

## მთავარი პრობლემა:
404 errors Vercel და Netlify-ზე ხშირად ხდება Next.js App Router structure-ის გამო.

## ✅ გადაწყვეტის ნაბიჯები:

### 1. სწორი File Structure:
```
app/
├── page.tsx          # ✅ Main page (root level)
├── layout.tsx        # ✅ Root layout  
├── globals.css       # ✅ Global styles
└── components/       # ✅ All components here
    ├── ChubkoHero.tsx
    ├── ChubkoAbout.tsx
    ├── ChubkoPortfolio.tsx
    ├── ChubkoServices.tsx
    ├── ChubkoContact.tsx
    ├── ChubkoNavbar.tsx
    ├── ChubkoFooter.tsx
    ├── ChubkoTestimonials.tsx
    ├── ContactForm.tsx
    ├── PortfolioModal.tsx
    └── TypewriterText.tsx
```

### 2. package.json Configuration:
```json
{
  "name": "chubko-portfolio",
  "scripts": {
    "build": "next build",
    "start": "next start"
  }
}
```

### 3. Vercel Configuration (vercel.json):
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

### 4. Netlify Configuration (netlify.toml):
```toml
[build]
  publish = ".next"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🔧 Manual Deployment Steps:

### GitHub Repository Setup:
1. **Clone your repository:**
   ```bash
   git clone https://github.com/iraklijanashvili/CHUBKO-1.git
   cd CHUBKO-1
   ```

2. **Copy CHUBKO files** (without node_modules):
   - Copy all files EXCEPT `node_modules/` and `.next/`
   - Ensure `app/page.tsx` is at root level (not in subfolders)

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Test locally:**
   ```bash
   npm run build
   npm start
   # Visit http://localhost:3000
   ```

5. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Fix: Next.js App Router structure for deployment"
   git push origin main
   ```

### Vercel Deployment:
1. **Go to**: [vercel.com](https://vercel.com)
2. **Import Project**: Select `iraklijanashvili/CHUBKO-1`
3. **Framework**: Next.js (auto-detected)
4. **Build Command**: `npm run build`
5. **Output Directory**: `.next`
6. **Deploy**

### Netlify Deployment:
1. **Go to**: [netlify.com](https://netlify.com)
2. **New site from Git**: Select `iraklijanashvili/CHUBKO-1`
3. **Build Command**: `npm run build`
4. **Publish Directory**: `.next`
5. **Deploy**

## 🎯 Critical Files for Deployment:

### Essential Files List:
```
✅ app/page.tsx         # Main page
✅ app/layout.tsx       # Root layout
✅ app/globals.css      # Styles
✅ app/components/      # All components
✅ package.json         # Dependencies
✅ next.config.mjs      # Next.js config
✅ tailwind.config.ts   # Tailwind config
✅ tsconfig.json        # TypeScript config
✅ public/              # Static assets
```

### Files to EXCLUDE:
```
❌ node_modules/       # Dependencies (reinstalled)
❌ .next/              # Build output (regenerated)
❌ .DS_Store           # macOS files
❌ *.log               # Log files
```

## 🚨 Common Issues & Solutions:

### Issue 1: "Page not found" 404
**Cause**: Wrong file structure or missing page.tsx
**Solution**: Ensure `app/page.tsx` exists at root level

### Issue 2: Build fails
**Cause**: Missing dependencies or TypeScript errors
**Solution**: 
```bash
npm install
npm run type-check
npm run build
```

### Issue 3: Images not loading
**Cause**: Missing files in public/ directory
**Solution**: Ensure all images are in `public/` folder

### Issue 4: Styles not working
**Cause**: Missing Tailwind config or CSS imports
**Solution**: Check `tailwind.config.ts` and `globals.css`

## ✅ Verification Steps:

After deployment, check:
1. **Homepage loads**: Main CHUBKO page displays
2. **Navigation works**: All sections scroll correctly
3. **Contact form**: Formspree integration works
4. **Images display**: Portfolio images load
5. **Responsive**: Works on mobile/desktop
6. **Dark mode**: Theme toggle functions

## 🎯 Expected Results:

After correct deployment:
- **Vercel**: `https://chubko-1.vercel.app` (working)
- **Netlify**: `https://chubko-1.netlify.app` (working)
- **Custom Domain**: Setup after successful deployment

---

**ეს guide-ი უნდა გადაწყვიტოს 404 error-ები და გახადოს deployment წარმატებული!** 🚀
