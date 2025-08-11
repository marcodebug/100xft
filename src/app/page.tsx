// NEXT-SPRINT: Stripe + Analytics

import dynamic from 'next/dynamic';
import VortexHeroSection from '@/components/VortexHeroSection';
const WhyChooseSection = dynamic(() => import('@/components/WhyChooseSection'), { ssr: true, loading: () => null });
const PricingCalculator = dynamic(() => import('@/components/PricingCalculator'), { loading: () => null });
const HowItWorksSection = dynamic(() => import('@/components/HowItWorksSection'), { loading: () => null });
const LogoMarquee = dynamic(() => import('@/components/LogoMarquee'), { loading: () => null });
// import SupportedPlatformsSection from '@/components/SupportedPlatformsSection';
// import EarlyAccessSection from '@/components/EarlyAccessSection';
import EnhancedFooter from '@/components/EnhancedFooter';
import StickyPreorderBar from '@/components/StickyPreorderBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <VortexHeroSection />
      <WhyChooseSection />
      <PricingCalculator />
      <LogoMarquee />
      {/* <SupportedPlatformsSection /> */}
      <HowItWorksSection />
      <EnhancedFooter />
      {/* StickyPreorderBar removed per request */}
    </div>
  );
}
