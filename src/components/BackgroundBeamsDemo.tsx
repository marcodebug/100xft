// NEXT-SPRINT: integrate Stripe + analytics hooks here

"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="relative h-[40rem] w-full overflow-hidden rounded-lg bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Join the waitlist
        </h1>
        <p className="max-w-lg mt-4 text-neutral-400">
          Experience Morocco's first prop firm. US clients welcome.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}