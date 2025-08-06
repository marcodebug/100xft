# 100XFT - Funded Trading Redefined

A modern pre-launch landing page for 100XFT prop trading firm built with Next.js 14, TypeScript, and TailwindCSS.

## 🎯 Features

- **Modern Red/Black Aesthetic**: Professional design inspired by elite prop trading firms
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: 
  - Live countdown timer
  - Dynamic pricing calculator
  - Email signup forms
  - Animated UI elements
- **Modular Architecture**: Easy to extend and customize

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── HeroSection.tsx     # Hero with CTA
│   ├── WhyChooseSection.tsx # Benefits section
│   ├── PricingCalculator.tsx # Interactive pricing
│   ├── HowItWorksSection.tsx # Process steps
│   ├── EarlyAccessSection.tsx # Countdown & signup
│   └── Footer.tsx          # Footer with links
├── data/
│   └── challenges.ts       # Challenge data
└── types/
    └── index.ts           # TypeScript definitions
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Landing Page Sections

### 1. Hero Section
- Red glowing logo and branding
- Main value proposition
- Email capture form
- Primary CTAs

### 2. Why Choose 100XFT
- Zero profit cap highlight
- 90% profit split benefit
- Multi-asset trading (Crypto & FX)
- Instant funded options

### 3. Pricing Calculator
- Interactive challenge type tabs
- Account size selection
- Dynamic pricing display
- Detailed challenge parameters

### 4. How It Works
- 3-step process visualization
- Clear iconography
- Process flow arrows

### 5. Early Access
- Live countdown timer
- Email signup incentives
- Launch timeline info

### 6. Footer
- Legal links and disclaimers
- Social media links
- Newsletter signup

## 🎨 Design System

### Colors
- **Primary**: Red (#ef4444)
- **Secondary**: Black (#000000)
- **Background**: Gradient black/gray
- **Accent**: Red glow effects

### Typography
- **Primary Font**: Geist Sans
- **Monospace**: Geist Mono

### Interactive Elements
- Hover animations
- Glow effects on buttons
- Smooth transitions
- Responsive layout

## 🔧 Customization

### Adding New Challenge Types
Edit `src/data/challenges.ts`:

```typescript
export const challengeData = {
  'new-challenge': {
    type: 'New Challenge',
    sizes: {
      '10k': { target: '5%', dailyLoss: '3%', /* ... */ }
    }
  }
};
```

### Modifying Sections
Each component is modular and self-contained. Update individual components in `src/components/` to customize specific sections.

### Styling Updates
- Global styles: `src/app/globals.css`
- Component styles: Inline TailwindCSS classes
- Custom animations: CSS classes in globals.css

## 📱 Mobile Responsive

The landing page is fully responsive with:
- Mobile-first design approach
- Optimized touch targets
- Readable typography scaling
- Efficient space utilization

## 🚀 Deployment

Ready for deployment on Vercel, Netlify, or any static hosting platform:

```bash
npm run build
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Emoji (customizable)
- **Fonts**: Google Fonts (Geist)

## 📈 Performance

- Static site generation ready
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast page load times

## 🎯 Pre-Launch Ready

This landing page is specifically designed for pre-launch marketing:
- Lead capture forms
- Countdown timers
- Early access messaging
- Social proof elements

---

Built for 100XFT - The future of prop trading.