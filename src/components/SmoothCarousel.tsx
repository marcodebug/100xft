// NEXT-SPRINT: Stripe + Analytics

'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { Plan, AccountSize } from '@/types/plan';
import ChallengeCard from './ChallengeCard';

interface SmoothCarouselProps {
  plans: Plan[];
  accountSize: AccountSize;
  selectedPlanId: string;
  comparingPlans: Set<string>;
  onSelect: (planId: string) => void;
  onPreorder: (planId: string) => void;
  onCompare: (planId: string) => void;
}

export default function SmoothCarousel({
  plans,
  accountSize,
  selectedPlanId,
  comparingPlans,
  onSelect,
  onPreorder,
  onCompare
}: SmoothCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const getItemsPerView = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;      // mobile: 1 card
      if (window.innerWidth < 1024) return 2;     // tablet: 2 cards  
      return plans.length <= 3 ? plans.length : 3; // desktop: all cards if ≤3, otherwise 3
    }
    return Math.min(3, plans.length);
  }, [plans.length]);

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = useMemo(() => Math.max(0, plans.length - itemsPerView), [plans.length, itemsPerView]);

  // Resize handler
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let timeoutId: NodeJS.Timeout;
      
      const handleResize = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const newItemsPerView = getItemsPerView();
          const newIsMobile = window.innerWidth < 640;
          
          setItemsPerView(newItemsPerView);
          setIsMobile(newIsMobile);
          
          const newMaxIndex = Math.max(0, plans.length - newItemsPerView);
          if (currentIndex > newMaxIndex) {
            setCurrentIndex(newMaxIndex);
          }
        }, 150);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize, { passive: true });
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timeoutId);
      };
    }
  }, [plans.length, currentIndex, getItemsPerView]);

  const handleDragEnd = useCallback((event: any, info: PanInfo) => {
    setIsDragging(false);
    
    if (maxIndex === 0) return;
    
    // More conservative thresholds for better mobile experience
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const distanceThreshold = isMobile ? 80 : 100;
    const velocityThreshold = isMobile ? 800 : 600;
    
    const velocity = info.velocity.x;
    const offset = info.offset.x;
    
    let newIndex = currentIndex;
    
    // Check for significant gesture (either distance or velocity)
    const hasSignificantDistance = Math.abs(offset) > distanceThreshold;
    const hasSignificantVelocity = Math.abs(velocity) > velocityThreshold;
    
    if (hasSignificantVelocity) {
      // Fast swipe
      if (velocity > 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (velocity < 0 && currentIndex < maxIndex) {
        newIndex = currentIndex + 1;
      }
    } else if (hasSignificantDistance) {
      // Slow drag with significant distance
      if (offset > 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (offset < 0 && currentIndex < maxIndex) {
        newIndex = currentIndex + 1;
      }
    }
    
    setCurrentIndex(newIndex);
  }, [currentIndex, maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, maxIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Calculate transform based on simple percentage
  const translateX = maxIndex > 0 ? -currentIndex * (100 / itemsPerView) : 0;

  return (
    <div className="relative">
      <div className="relative overflow-hidden mb-12">
        {/* Navigation arrows */}
        {maxIndex > 0 && (
          <div className="hidden lg:block">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-gray-800/30 border-gray-700/50 text-gray-500 cursor-not-allowed'
                  : 'bg-black/40 border-white/20 text-white hover:bg-brand-600/80 hover:border-brand-400/50 shadow-lg'
              }`}
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                currentIndex === maxIndex
                  ? 'bg-gray-800/30 border-gray-700/50 text-gray-500 cursor-not-allowed'
                  : 'bg-black/40 border-white/20 text-white hover:bg-brand-600/80 hover:border-brand-400/50 shadow-lg'
              }`}
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Mobile: Clean horizontal scroll without visible scrollbars */}
        <div className="sm:hidden -mx-2">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-2 px-4 scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="snap-center flex-shrink-0 w-[280px] first:ml-2 last:mr-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <ChallengeCard
                  plan={plan}
                  accountSize={accountSize}
                  isSelected={selectedPlanId === plan.id}
                  isComparing={comparingPlans.has(plan.id)}
                  onSelect={() => !isDragging && onSelect(plan.id)}
                  onPreorder={() => onPreorder(plan.id)}
                  onCompare={() => onCompare(plan.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Original carousel track */}
        <motion.div
          className={`hidden sm:flex carousel-container ${
            maxIndex > 0 ? 'cursor-grab active:cursor-grabbing' : 'justify-center'
          }`}
          style={{
            gap: isMobile ? '1rem' : '1.5rem',
            width: maxIndex > 0 ? `${(plans.length / itemsPerView) * 100}%` : '100%',
            transform: `translateX(calc(${translateX}% - ${currentIndex * (isMobile ? 1 : 1.5)}rem))`
          }}
          drag={maxIndex > 0 ? "x" : false}
          dragConstraints={{
            left: -(maxIndex * (100 / itemsPerView)) - (maxIndex * (isMobile ? 16 : 24)),
            right: 0
          }}
          dragElastic={0.1}
          dragMomentum={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{
            transform: `translateX(calc(${translateX}% - ${currentIndex * (isMobile ? 1 : 1.5)}rem))`
          }}
          transition={{
            type: "spring",
            stiffness: typeof window !== 'undefined' && window.innerWidth < 640 ? 200 : 280,
            damping: typeof window !== 'undefined' && window.innerWidth < 640 ? 30 : 35,
            mass: typeof window !== 'undefined' && window.innerWidth < 640 ? 0.8 : 0.6
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className="flex-shrink-0 carousel-item challenge-card"
              style={{ 
                width: `calc(${100 / itemsPerView}% - ${isMobile ? '0.5rem' : '1rem'})`
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <ChallengeCard
                plan={plan}
                accountSize={accountSize}
                isSelected={selectedPlanId === plan.id}
                isComparing={comparingPlans.has(plan.id)}
                onSelect={() => !isDragging && onSelect(plan.id)}
                onPreorder={() => onPreorder(plan.id)}
                onCompare={() => onCompare(plan.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Dots indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-brand-500 rounded-full shadow-lg shadow-brand-500/50'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
                }`}
              >
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeCarouselDot"
                    className="absolute inset-0 bg-brand-500 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Mobile swipe hint */}
      {maxIndex > 0 && (
        <div className="md:hidden text-center mt-6">
          <p className="text-gray-400 text-sm">
            👈 Swipe to explore challenges
          </p>
        </div>
      )}
    </div>
  );
}