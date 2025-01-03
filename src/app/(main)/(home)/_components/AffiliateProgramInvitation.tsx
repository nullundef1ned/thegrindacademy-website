'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import environmentUtil from '@/utils/env.util';
import BrandBars from '@/components/BrandBars';

export default function AffiliateProgramInvitation() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-10 grid place-items-center min-h-[20dvh] relative'>
      <Blur className='absolute w-1/2 h-1/2 -z-10' />
      <div className='space-y-4 flex flex-col items-center w-full md:w-1/2 mx-auto z-40'>
        <h1 className='text-3xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>Join our Affiliate Program</h1>
        <p className='text-center text-muted'>Join our affiliate program and earn 20% of every sale you refer to us.</p>
        <Button href="/affiliate-program">Learn More</Button>
      </div>
      <BrandBars containerClassName='absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full opacity-50' />
    </div>
  )
}
