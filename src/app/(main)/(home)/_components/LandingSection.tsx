'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import Blur from '@/components/Blur';
import BrandBars from '@/components/BrandBars';
import Video from '@/components/Video';
import { useQuery } from '@tanstack/react-query';
import useAxios from '@/hooks/useAxios';
import { IMeta } from '@/app/_module/app.interfaces';

export default function LandingSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data } = useQuery<IMeta>({
    queryKey: ['meta'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/meta')).data
    },
  })

  return (
    <div className='root-section !py-16 space-y-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
        <div className='space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-4xl text-center lg:text-left lg:text-6xl font-gishaBold' data-aos='fade-right' data-aos-delay={initialDelay}>
              Master the Skill of Making <span className='text-primary-200'>Money</span>
            </h1>
            <h3 className='text-accent text-center lg:text-left font-gisha' data-aos='fade-right' data-aos-delay={initialDelay}>
              Where 90% Grind Meets 10% Talent.
            </h3>
          </div>
        </div>
        <div className='hidden lg:flex flex-col justify-center relative' data-aos='fade-left'>
          <Blur className='absolute w-full h-40 translate-x-[44%]' />
          <BrandBars containerClassName='translate-x-[44%]' />
        </div>
      </div>
      <div className='w-full aspect-video border p-4 bg-black' data-aos='fade-up' data-aos-delay={initialDelay}>
        <Video
          src={data?.landingPageVideoUrl || ''}
          poster={data?.landingPageThumbnailUrl || ''}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-center !mt-10" data-aos='fade-up' data-aos-delay={initialDelay}>
        <Button variant='outline' href='/courses'>Explore our courses</Button>
        <Button href='/subscription'>Join the Grind Academy</Button>
      </div>
      <div className="flex items-center space-x-3 justify-center" data-aos='fade-up' data-aos-delay={initialDelay}>
        <p className='text-accent text-sm'>Over 1000+ students have enrolled and counting!</p>
      </div>
    </div>
  )
}
