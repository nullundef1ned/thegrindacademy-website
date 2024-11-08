'use client';

import { clsx } from 'clsx';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import BrandBars from '@/components/BrandBars';

export default function Preloader() {
  const [loadPercentage, setLoadPercentage] = useState(0);

  const intervalTime = 4000 / 100; // 4 seconds
  const timeBeforeNextLoad = 1000 * 60 * 5; // 5 minutes

  const lastLoadedTime = localStorage.getItem('lastLoadedTime');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercentage(prev => {
        if (prev >= 120) {
          clearInterval(interval);
          return prev;
        }
        if (prev === 100) {
          localStorage.setItem('lastLoadedTime', new Date().toISOString());
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [intervalTime]);

  const isLoaded = loadPercentage >= 100;

  const getBarLoadStyles = (percentage: number) => {
    if (percentage < 20) return 'bg-primary bg-opacity-20';
    if (percentage < 40) return 'bg-primary bg-opacity-40';
    if (percentage < 60) return 'bg-primary bg-opacity-60';
    if (percentage < 80) return 'bg-primary bg-opacity-80';
    if (percentage < 100) return 'bg-primary bg-opacity-100';
    return 'bg-primary';
  }

  const barLoadStyles = getBarLoadStyles(loadPercentage);

  if (lastLoadedTime && new Date().getTime() - new Date(lastLoadedTime).getTime() < timeBeforeNextLoad) return null;

  return (
    <div className={clsx(loadPercentage == 120 && 'opacity-0 -z-50', 'fixed inset-0 bg-background z-50 flex flex-col items-center justify-center transition-opacity duration-700')}>
      <Image src='/logos/logo.svg' alt='The Grind Academy Logo' width={200} height={60} className={clsx(isLoaded && 'opacity-0', 'transition-opacity duration-700')} />
      <BrandBars containerClassName={clsx(isLoaded && 'opacity-0', 'w-64 mb-10 mt-20 transition-opacity duration-700')} barClassName={`!h-14 ${barLoadStyles}`} />
      {/* <p className={clsx(isLoaded && 'opacity-0', 'font-gishaBold text-xl transition-opacity duration-700')}>Your journey to success begins here</p> */}
      <p className={clsx(isLoaded && 'opacity-0', 'transition-opacity duration-700')}>{loadPercentage > 100 ? 100 : loadPercentage}%</p>
    </div>
  )
}
