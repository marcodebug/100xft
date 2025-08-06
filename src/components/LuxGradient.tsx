// NEXT-SPRINT: Stripe + Analytics

'use client';

import EnhancedParticles from './EnhancedParticles';
import { BackgroundBeams } from './ui/background-beams';

export default function LuxGradient() {
  return (
    <>
      {/* TEMPORARY: Disable gradients to test beams */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
      </div>

      {/* Luxury red laser beams - MAXIMUM VISIBILITY */}
      <div className="fixed inset-0 -z-10">
        <BackgroundBeams className="opacity-100" />
      </div>

      {/* TEMPORARY: All effects disabled to test beams */}
    </>
  );
}