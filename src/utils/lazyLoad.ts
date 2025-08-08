import { lazy } from 'react';

// Lazy load components for better performance
export const LazyPreorderForm = lazy(() => import('@/components/PreorderForm'));
export const LazyPricingCalculator = lazy(() => import('@/components/PricingCalculator'));
export const LazyWhyChooseSection = lazy(() => import('@/components/WhyChooseSection'));
export const LazyHowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));