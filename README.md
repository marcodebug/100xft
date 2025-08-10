# 100XFT - Morocco's First Prop Trading Firm

![100XFT Logo](https://100xft.com/og-image.jpg)

🇲🇦 **Made in Morocco** — 🇺🇸 **US Clients Welcome**

## Overview

100XFT is Morocco's first proprietary trading firm, designed to empower traders worldwide. We offer elite trading challenges across Forex, Crypto, and Futures markets with up to 90% profit splits and no profit caps on funded accounts.

## 🚀 Features

### Trading Challenges
- **Forex Challenges**: One-Phase & Two-Phase FX with 1:50 leverage
- **Crypto Challenges**: One-Phase & Two-Phase Crypto with up to 5:1 leverage
- **Futures Challenges**: 4-Phase futures with progressive requirements
- **Instant Funded**: Immediate access to funded accounts

### Account Sizes
- $10K to $400K account sizes available
- Competitive pricing structure
- Transparent rules and requirements

### Profit Sharing
- **80% profit split** on FX accounts
- **90% profit split** on Crypto and Futures accounts
- **Zero profit caps** on funded accounts
- Bi-weekly payouts (minimum $50)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form + Zod
- **Database**: Supabase
- **Email**: Brevo (sib-api-v3-sdk)
- **Deployment**: Vercel

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── faq/              # FAQ page
│   ├── rules/            # Trading rules page
│   ├── terms/            # Terms of service
│   ├── privacy/          # Privacy policy
│   └── risk-disclosure/   # Risk disclosure statement
├── components/            # React components
│   ├── ui/               # UI components (BackgroundBeams, etc.)
│   ├── PricingCalculator.tsx
│   ├── VortexHeroSection.tsx
│   └── ...
├── data/                 # Data layer
│   └── plans.ts          # Trading plans and pricing
├── types/                # TypeScript definitions
├── utils/                # Utility functions
└── lib/                  # Shared libraries
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)
- Brevo account (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/100xft.git
   cd 100xft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   BREVO_KEY=your_brevo_api_key
   ```

4. **Database setup**
   Run the SQL script in `scripts/setup-db.sql` in your Supabase SQL editor.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Set environment variables**
   Add your environment variables in the Vercel dashboard.

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon/public key
- `BREVO_KEY`: Your Brevo API key for email sending

## 📊 Performance Optimizations

- **Next.js 14 App Router** for optimal performance
- **Lazy loading** for non-critical components
- **Error boundaries** for graceful error handling
- **Image optimization** with Next.js Image component
- **Bundle optimization** with dynamic imports
- **SEO optimization** with proper metadata

## 🎨 Design System

### Colors
- **Brand Red**: `#FF1F1F` (Primary)
- **Gradients**: Red to orange gradients throughout
- **Background**: Black/dark with glass morphism effects
- **Text**: White with gray variants

### Components
- **Glass Morphism**: `backdrop-blur-xl` with semi-transparent backgrounds
- **Animations**: Framer Motion for smooth transitions
- **Responsive**: Mobile-first design approach
- **Accessibility**: ARIA labels and keyboard navigation

## 📚 Trading Information

### Challenge Types

1. **One-Phase FX**
   - 10% profit target
   - 5% daily loss limit
   - 6% max drawdown
   - 80% profit split

2. **Two-Phase FX**
   - 8% → 5% profit targets
   - 5% daily loss limit
   - 8% max drawdown
   - 80% profit split

3. **Crypto Challenges**
   - 6-9% profit targets
   - ±3% daily cap limit
   - 6-9% max drawdown
   - 90% profit split

4. **Futures (4-Phase)**
   - 9% profit target per phase
   - 25% consistency requirement
   - Variable leverage
   - 90% profit split

## 🔐 Security & Compliance

- **Data Protection**: GDPR compliant privacy policy
- **Risk Disclosure**: Comprehensive risk statements
- **Terms of Service**: Clear user agreements
- **Secure APIs**: Properly secured API endpoints
- **KYC/AML**: Identity verification for funded accounts

## 🤝 Support

- **Email**: support@100xft.com
- **Legal**: legal@100xft.com
- **Privacy**: privacy@100xft.com
- **Discord**: Join our trading community
- **Live Chat**: Available 24/5

## 📄 License

This project is proprietary and confidential. All rights reserved by 100XFT.

## 🌍 Supported Countries

We welcome traders from 195+ countries including:
- ✅ United States
- ✅ European Union
- ✅ Canada
- ✅ Australia
- ✅ United Kingdom
- ✅ And many more...

---

**Made with ❤️ in Morocco** 🇲🇦

For more information, visit [100xft.com](https://100xft.com)