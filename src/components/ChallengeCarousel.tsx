'use client';

// NEXT-SPRINT: Stripe + Analytics

import { useState, useEffect, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Plan, AccountSize } from '@/types/plan';
import ChallengeCard from './ChallengeCard';

interface ChallengeCarouselProps {
  plans: Plan[];
  accountSize: AccountSize;
  selectedPlanId: string;
  comparingPlans: Set<string>;
  onSelect: (planId: string) => void;
  onPreorder: () => void;
  onCompare: (planId: string) => void;
}

export default function ChallengeCarousel({
  plans: propPlans,
  accountSize,
  selectedPlanId,
  comparingPlans,
  onSelect,
  onPreorder,
  onCompare
}: ChallengeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  
  // Use the plans passed as props (filtered from PricingCalculator)
  const mainPlans = propPlans;

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;      // mobile: 1 card
      if (window.innerWidth < 1024) return 2;     // tablet: 2 cards  
      if (window.innerWidth < 1280) return 3;     // large tablet: 3 cards
      return 3;                                   // desktop: always 3 cards (consistent sizing)
    }
    return 3; // Default for SSR or initial render (consistent sizing)
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mainPlans.length]);

  // Reset index when plans change
  useEffect(() => {
    setCurrentIndex(0);
  }, [mainPlans.length]);

  const maxIndex = Math.max(0, mainPlans.length - itemsPerView);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 50; // Lower threshold for mobile
    const velocity = Math.abs(info.velocity.x);
    
    // If drag has significant velocity or distance, change slide
    if ((velocity > 500) || (Math.abs(info.offset.x) > threshold)) {
      if (info.offset.x > 0 && currentIndex > 0) {
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else if (info.offset.x < 0 && currentIndex < maxIndex) {
        setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
      }
    }
  };

  const goToSlide = (index: number) => {
    if (!isDragging) {
      setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (mainPlans.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No challenges available for this category.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mobile hint */}
      <div className="md:hidden text-center mb-4">
        <p className="text-gray-400 text-sm">← Swipe to explore challenges →</p>
      </div>

      {/* Navigation arrows - desktop only */}
      {itemsPerView < mainPlans.length && (
        <>
          <motion.button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-black/80 hover:bg-black border border-brand-600/50 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-black/80 hover:bg-black border border-brand-600/50 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </motion.button>
        </>
      )}

      {/* Carousel container */}
      <div 
        ref={constraintsRef} 
        className="overflow-hidden px-4 md:px-8 py-4 challenge-carousel"
      >
        <motion.div
          className="flex items-stretch cursor-grab active:cursor-grabbing will-change-transform touch-pan-x carousel-container"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.15}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{
            x: `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 1.5}rem)`
          }}
          transition={{
            type: "spring",
            stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 300 : 350,
            damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 25 : 30,
            mass: 0.6
          }}
          style={{
            width: `calc(${(mainPlans.length / itemsPerView) * 100}% + ${(mainPlans.length - 1) * 1.5}rem)`
          }}
        >
          {mainPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="flex-shrink-0 px-2 md:px-3 lg:px-4 carousel-item flex items-stretch"
              style={{ 
                width: `calc(${100 / itemsPerView}% - ${typeof window !== 'undefined' && window.innerWidth < 640 ? '1rem' : '2rem'})`,
                minWidth: typeof window !== 'undefined' && window.innerWidth < 640 ? '320px' : '320px',
                maxWidth: typeof window !== 'undefined' && window.innerWidth < 640 ? '90vw' : '380px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-full">
                <ChallengeCard
                  plan={plan}
                  accountSize={accountSize}
                  isSelected={selectedPlanId === plan.id}
                  isComparing={comparingPlans.has(plan.id)}
                  onSelect={() => onSelect(plan.id)}
                  onPreorder={onPreorder}
                  onCompare={() => onCompare(plan.id)}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicators */}
      {itemsPerView < mainPlans.length && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index 
                  ? 'bg-brand-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              layoutId={`dot-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}