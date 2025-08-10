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
  onPreorder: (planId: string) => void;
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
  const [dragStartTime, setDragStartTime] = useState(0);
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
  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 640 : false);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setIsMobile(window.innerWidth < 640);
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
    const now = Date.now();
    const dragDuration = now - dragStartTime;
    
    // Prevent multiple rapid swipes (debouncing)
    if (dragDuration < 150) {
      setIsDragging(false);
      return;
    }
    
    setIsDragging(false);
    
    // More conservative thresholds to prevent accidental swipes
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const distanceThreshold = isMobile ? 60 : 100; // slightly easier on mobile
    const velocityThreshold = isMobile ? 600 : 600;
    
    const dragDistance = Math.abs(info.offset.x);
    const dragVelocity = Math.abs(info.velocity.x);
    
    // Change slide when either distance or velocity is significant
    if (dragDistance > distanceThreshold || dragVelocity > velocityThreshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        // Swipe right - go to previous
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else if (info.offset.x < 0 && currentIndex < maxIndex) {
        // Swipe left - go to next  
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

  // Mobile: use native scroll-snap for buttery smooth swipes
  if (isMobile) {
    return (
      <div className="relative">
        {/* Mobile hint removed per request */}

        <div className="overflow-x-auto -mx-4 px-4 py-2 snap-x snap-mandatory scrollbar-thin">
          <div className="flex gap-3 items-stretch">
            {mainPlans.map((plan) => (
              <div key={plan.id} className="snap-center flex-shrink-0 w-[85vw] max-w-[420px]">
                <ChallengeCard
                  plan={plan}
                  accountSize={accountSize}
                  isSelected={selectedPlanId === plan.id}
                  isComparing={false}
                  onSelect={() => onSelect(plan.id)}
                  onPreorder={() => onPreorder(plan.id)}
                  onCompare={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop/Tablet: Framer Motion carousel
  return (
    <div className="relative">
      {/* Mobile hint removed per request */}

      {/* Navigation arrows - desktop/tablet only */}
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
          className="flex items-stretch justify-center will-change-transform carousel-container"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.06}
          dragMomentum={false}
          onDragStart={() => {
            setIsDragging(true);
            setDragStartTime(Date.now());
          }}
          onDragEnd={handleDragEnd}
          animate={{
            x: mainPlans.length < itemsPerView 
              ? 0  // Center when fewer cards than itemsPerView
              : `calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 1.5}rem)`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 34,
            mass: 0.6
          }}
          style={{
            width: mainPlans.length < itemsPerView 
              ? 'auto'  // Auto width when centering fewer cards
              : `calc(${(mainPlans.length / itemsPerView) * 100}% + ${(mainPlans.length - 1) * 1.5}rem)`
          }}
        >
          {mainPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="flex-shrink-0 px-2 md:px-3 lg:px-4 carousel-item flex items-stretch"
              style={{ 
                width: `calc(${100 / itemsPerView}% - 2rem)`,
                minWidth: '360px',
                maxWidth: '420px'
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
                  isComparing={false}
                  onSelect={() => onSelect(plan.id)}
                  onPreorder={() => onPreorder(plan.id)}
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