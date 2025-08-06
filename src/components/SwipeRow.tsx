// NEXT-SPRINT: Stripe / Analytics

'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface SwipeRowProps {
  children: ReactNode;
  className?: string;
  showArrows?: boolean;
}

export default function SwipeRow({ children, className = '', showArrows = true }: SwipeRowProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { 
      perView: 1.2, 
      spacing: 16 
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { 
          perView: 3, 
          spacing: 24 
        }
      },
      '(min-width: 1024px)': {
        slides: { 
          perView: 4, 
          spacing: 24 
        }
      }
    },
    loop: false,
  });

  const canGoPrev = instanceRef.current?.track?.details?.rel !== 0;
  const canGoNext = instanceRef.current?.track?.details?.rel !== instanceRef.current?.track?.details?.maxIdx;

  return (
    <div className={`relative ${className}`}>
      {/* Navigation arrows - desktop only */}
      {showArrows && (
        <div className="hidden lg:block">
          <button
            onClick={() => instanceRef.current?.prev()}
            disabled={!canGoPrev}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-xl border transition-all duration-300 ${
              !canGoPrev
                ? 'bg-gray-800/30 border-gray-700/50 text-gray-500 cursor-not-allowed'
                : 'bg-black/40 border-white/20 text-white hover:bg-brand-600/80 hover:border-brand-400/50 shadow-lg'
            }`}
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => instanceRef.current?.next()}
            disabled={!canGoNext}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-xl border transition-all duration-300 ${
              !canGoNext
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

      {/* Keen Slider Container */}
      <div ref={sliderRef} className="keen-slider">
        {Array.isArray(children) ? children.map((child, index) => (
          <div key={index} className="keen-slider__slide">
            {child}
          </div>
        )) : (
          <div className="keen-slider__slide">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}