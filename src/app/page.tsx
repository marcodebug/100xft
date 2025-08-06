// NEXT-SPRINT: Stripe + Analytics

import VortexHeroSection from '@/components/VortexHeroSection';
import WhyChooseSection from '@/components/WhyChooseSection';
// import RewardCycleBanner from '@/components/RewardCycleBanner';
import PricingCalculator from '@/components/PricingCalculator';
// import SupportedPlatformsSection from '@/components/SupportedPlatformsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
// import EarlyAccessSection from '@/components/EarlyAccessSection';
import EnhancedFooter from '@/components/EnhancedFooter';
import StickyPreorderBar from '@/components/StickyPreorderBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <VortexHeroSection />
      <WhyChooseSection />
      <PricingCalculator />
      {/* <SupportedPlatformsSection /> */}
      <HowItWorksSection />
      <EnhancedFooter />
      <StickyPreorderBar />
    </div>
  );
}
