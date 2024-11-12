'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import Blur from '@/components/Blur';
import BrandBars from '@/components/BrandBars';

export default function LandingSection() {
  const initialDelay = 300;

  return (
    <div className='root-section !py-16 space-y-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-4xl text-center lg:text-left lg:text-6xl font-gishaBold' data-aos='fade-right' data-aos-delay={initialDelay}>
              Master the Skill of Making <span className='text-primary-200'>Money</span>
            </h1>
            <h3 className='text-accent text-center lg:text-left' data-aos='fade-right' data-aos-delay={initialDelay}>
              Where 90% Grind Meets 10% Talent.
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start" data-aos='fade-right' data-aos-delay={initialDelay}>
            <Button variant='outline' href='/courses'>Explore our courses</Button>
            <Button href='/subscription'>Join the Grind Academy</Button>
          </div>
          <div className="flex items-center space-x-3 justify-center lg:justify-start" data-aos='fade-right' data-aos-delay={initialDelay}>
            <p className='text-accent text-sm'>Over 1000+ students have enrolled and counting!</p>
          </div>
        </div>
        <div className='hidden lg:flex flex-col justify-center relative' data-aos='fade-left'>
          <Blur className='absolute w-full h-40 translate-x-[44%]' />
          <BrandBars containerClassName='translate-x-[44%]' />
        </div>
      </div>
      <div className='w-full border p-4' data-aos='fade-up' data-aos-delay={initialDelay}>
        <video className='w-full h-[400px] lg:h-[680px] rounded-[2px] object-cover bg-primary-200/10 animate-pulse' poster='/images/default-thumbnail.jpg' autoPlay muted loop>
          <source src='/videos/landing-video.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
