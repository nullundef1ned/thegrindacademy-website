'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button';
import BrandBars from '@/components/BrandBars';

export default function AffiliateProgramInvitation() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-10 grid place-items-center min-h-[20dvh] relative'>
      <Blur className='absolute w-1/2 h-1/2 -z-10' />
      <div className='space-y-4 flex flex-col items-center w-full md:w-1/2 mx-auto z-20'>
        <h1 className='text-3xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>Tell a friend about us & Get paid</h1>
        <p className='text-center text-muted'>Get paid as high as a 50% commission when your friends join the grind academy</p>
        <Button href="/affiliate-program" size="sm">Learn More</Button>
      </div>
      <BrandBars containerClassName='absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full opacity-50' />
    </div>
  )
}
