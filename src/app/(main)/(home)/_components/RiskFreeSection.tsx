'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';

export default function RiskFreeSection() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-10 grid place-items-center h-[100dvh] relative'>
      <Blur className='absolute w-1/2 h-1/2 -z-10' />
      <div className='space-y-4 flex flex-col items-center w-2/3 md:w-1/2 mx-auto'>
        <Image
          className='animate-hover-bounce'
          src='/images/money-sack.svg'
          alt='Risk Free Learning'
          width={120} height={120}
          data-aos='fade-up'
        />
        <h1 className='text-4xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>Hit 6 Figures in 30 Days or Get Your Money Back</h1>
        <p className='text-center text-muted' data-aos='fade-up' data-aos-delay={initialDelay}>We believe in the transformative power of our mentorship. If you don&apos;t see the path to six figures within 30 days, we&apos;ll refund your subscription fee, Join risk-free and unlock your potential today!</p>
      </div>
    </div>
  )
}
