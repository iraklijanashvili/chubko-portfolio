# CHUBKO - Creative Graphic Design Studio

A modern, responsive portfolio website for CHUBKO graphic design studio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![CHUBKO Portfolio](https://i.ibb.co/Jj5PRsg/new-Portfolio.png)

## ✨ Features

### 🎨 **Design & UX**
- **Modern minimalist design** with bold typography
- **Responsive design** optimized for desktop, tablet, and mobile
- **Dark/Light mode toggle** with smooth transitions
- **Smooth animations** and micro-interactions
- **Typewriter effect** in hero section
- **Interactive portfolio gallery** with modal lightbox

### 🚀 **Performance**
- **Next.js 14** with App Router for optimal performance
- **Image optimization** with lazy loading and modern formats (AVIF, WebP)
- **Font optimization** with Google Fonts (Inter & Poppins)
- **60fps animations** with GPU acceleration
- **Lighthouse score 95+** for performance

### 📧 **Contact Integration**
- **Working contact form** with Formspree integration
- **Client-side validation** with real-time feedback
- **Success/error handling** with smooth animations
- **Email delivery** without backend setup

### 🔍 **SEO & Accessibility**
- **Comprehensive meta tags** for search engines
- **OpenGraph & Twitter cards** for social sharing
- **Structured data** and semantic HTML
- **WCAG compliant** accessibility features
- **Focus management** and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Forms**: @formspree/react
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)
- **Analytics**: Vercel Analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chubko-portfolio.git
   cd chubko-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the Formspree form ID in `ContactForm.tsx`:
   ```typescript
   const [state, handleFormspreeSubmit] = useForm("your-formspree-id")
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📝 Customization

### 🎨 **Branding**
- Update colors in `tailwind.config.ts` and `globals.css`
- Replace logo and favicon in `/public` directory
- Modify company information in components

### 📧 **Contact Form**
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace form ID in `ContactForm.tsx`
4. Test form submission

### 🖼️ **Portfolio**
- Add your project images to `/public` directory
- Update project data in `ChubkoPortfolio.tsx`
- Customize categories and filters

### 🎭 **Content**
- Update hero text in `ChubkoHero.tsx`
- Modify about section in `ChubkoAbout.tsx`
- Add your services in `ChubkoServices.tsx`
- Update testimonials in `ChubkoTestimonials.tsx`

## 📁 Project Structure

```
chubko-portfolio/
├── app/
│   ├── (home)/
│   │   ├── components/          # Page components
│   │   │   ├── ChubkoHero.tsx
│   │   │   ├── ChubkoAbout.tsx
│   │   │   ├── ChubkoPortfolio.tsx
│   │   │   ├── ChubkoServices.tsx
│   │   │   ├── ChubkoTestimonials.tsx
│   │   │   ├── ChubkoContact.tsx
│   │   │   ├── ChubkoFooter.tsx
│   │   │   ├── ChubkoNavbar.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── PortfolioModal.tsx
│   │   │   └── TypewriterText.tsx
│   │   └── page.tsx             # Main page
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/
│   ├── theme-provider.tsx       # Theme context
│   └── ui/                      # Reusable UI components
├── lib/
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── favicon.svg
│   ├── chubko-og.png
│   ├── site.webmanifest
│   ├── robots.txt
│   └── *.png                    # Project images
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── package.json
```

## 🚀 Quick Deployment

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iraklijanashvili/chubko-portfolio)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/iraklijanashvili/chubko-portfolio)

### Manual Deployment

#### 📋 Pre-Deployment Steps:
1. **Update Formspree Form ID** in `ContactForm.tsx`
2. **Set up environment variables** (copy from `env.example`)
3. **Update repository URL** in `package.json`

#### 🚀 Deploy Script:
```bash
# Make script executable
chmod +x deploy.sh

# Deploy to Vercel
./deploy.sh vercel

# Deploy to Netlify
./deploy.sh netlify

# Push to GitHub
./deploy.sh github
```

#### 📖 Detailed Instructions:
See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for complete deployment instructions.

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run preview      # Build and preview locally
npm run clean        # Clean build files
```

## 📊 Performance

- **Lighthouse Score**: 95+ Performance
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with tree shaking
- **Image Optimization**: Automatic with Next.js
- **Font Loading**: Optimized with `font-display: swap`

## 🎯 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Minimum versions**: Last 2 versions of each browser

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio:

- **Email**: hello@chubko.design
- **GitHub Issues**: [Create an issue](https://github.com/your-username/chubko-portfolio/issues)
- **Documentation**: Check the code comments for detailed explanations

## 🌟 Acknowledgments

- **Design inspiration**: Modern portfolio trends
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [Formspree](https://formspree.io/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by CHUBKO Design Studio