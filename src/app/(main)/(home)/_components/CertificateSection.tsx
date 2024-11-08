'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

export default function CertificateSection() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <div className='space-y-4 md:w-3/4'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Get Certified
            <br />
            <span className='text-primary-200'>
              Get Recognized
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            Get your questions answered and gain insights directly from experienced instructors in real time
          </p>
        </div>
      </div>
      <div className="w-full bg-[#00246B14] rounded p-10 relative overflow-hidden h-[80dvh]">
        <div className='absolute w-full h-1/3 -translate-y-10'>
          <Image src='/images/grid.svg' alt='Grid' fill className='absolute w-full h-full object-cover' />
        </div>
        <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10 left-1/2 -translate-x-1/2 bg-white/10' />
      </div>
      <Button href='/subscription' className='mx-auto' data-aos='fade-up' data-aos-delay={initialDelay + 400}>
        Get Started
      </Button>
    </div>
  )
}
