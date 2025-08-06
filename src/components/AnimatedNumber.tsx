// NEXT-SPRINT: Stripe + Analytics

'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedNumberProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedNumber({ 
  value, 
  suffix = '', 
  prefix = '', 
  className = '',
  duration = 0.3 
}: AnimatedNumberProps) {
  const spring = useSpring(0, { duration: duration * 1000 });
  
  useEffect(() => {
    if (typeof value === 'number') {
      spring.set(value);
    }
  }, [value, spring]);

  const display = useTransform(spring, (latest) => {
    if (typeof value === 'string') {
      return value;
    }
    return Math.round(latest);
  });

  if (typeof value === 'string') {
    return (
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration }}
        className={className}
      >
        {prefix}{value}{suffix}
      </motion.span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      className={className}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}