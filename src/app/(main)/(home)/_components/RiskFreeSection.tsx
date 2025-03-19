'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';

export default function RiskFreeSection() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-10 grid place-items-center h-[100dvh] relative'>
      <Blur className='absolute w-1/2 h-1/2 -z-10' />
      <div className='space-y-4 flex flex-col items-center w-full md:w-1/2 mx-auto'>
        <Image
          className='animate-hover-bounce'
          src='/images/money-sack.svg'
          alt='Risk Free Learning'
          width={120} height={120}
          data-aos='fade-up'
        />
        <h1 className='text-4xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>You are One step away from 6 Figures in the next 30-Days</h1>
      </div>
    </div>
  )
}
