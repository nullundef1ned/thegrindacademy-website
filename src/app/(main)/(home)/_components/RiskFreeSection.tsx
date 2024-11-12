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
        <h1 className='text-4xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>Risk Free Learning</h1>
        <p className='text-center text-muted' data-aos='fade-up' data-aos-delay={initialDelay}>We&apos;re confident you&apos;ll love our courses. If you&apos;re not satisfied, we offer a 14-day money-back guarantee on all subscriptions</p>
      </div>
    </div>
  )
}
