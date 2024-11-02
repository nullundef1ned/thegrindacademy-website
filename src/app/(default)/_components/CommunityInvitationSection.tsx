'use client';

import React from 'react'
import BrandBars from '@/components/BrandBars'
import { Button } from '@/components/ui/button'
import IconifyIcon from '@/components/IconifyIcon';

export default function CommunityInvitationSection() {
  const initialDelay = 400;

  return (
    <div className='root-section !py-10 space-y-10'>
      <div className='py-20 grid items-center grid-cols-4 lg:grid-cols-8 gap-4 overflow-hidden border-opacity-5 rounded-[2px] radial-gradient from-[#0E121F73] to-[#00246B19] border border-[#B0CAFF0D]' data-aos='fade-up'>
        <div className='hidden lg:block col-span-2' data-aos='fade-right' data-aos-delay={initialDelay + 1000}>
          <BrandBars containerClassName='-translate-x-[20%]' barClassName='!h-16' />
        </div>
        <div className='relative col-span-4 max-w-96 md:max-w-[600px] lg:max-w-full mx-auto p-4'>
          <IconifyIcon
            dataAos='fade-down-right'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute -top-3 left-6'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce delay-300'
            icon='ri:trophy-fill' />
          <IconifyIcon
            dataAos='fade-down-left'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute top-0 right-4 sm:right-0'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce delay-100'
            icon='ri:money-dollar-circle-fill' />
          <IconifyIcon
            dataAos='fade-left'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute top-1/2 right-0 sm:-right-10'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce delay-200'
            icon='ri:compass-fill' />
          <IconifyIcon
            dataAos='fade-right'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute top-1/2 left-0 sm:-left-10'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce delay-500'
            icon='ri:map-pin-2-fill' />
          <IconifyIcon
            dataAos='fade-up-right'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute -bottom-10 left-10 sm:-left-4'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce delay-700'
            icon='ri:telegram-fill' />
          <IconifyIcon
            dataAos='fade-up-left'
            dataAosDelay={initialDelay + 600} size={24}
            containerClassName='absolute -bottom-8 right-3'
            className='text-primary-100 opacity-30 rotate-12 transition-all animate-hover-bounce'
            icon='ri:book-open-fill' />

          <div className='flex flex-col items-center space-y-6'>
            <h3 className='text-center font-gishaBold text-4xl' data-aos='fade-up' data-aos-delay={initialDelay}>
              Join The Grind Academy <br />
              <span className='text-primary-200'>Today</span>
            </h3>
            <p className='text-center text-accent' data-aos='fade-up' data-aos-delay={initialDelay + 200}>
              Gain access to our exclusive Telegram channels where you can interact with instructors, network with peers, and share your progress
            </p>
            <Button data-aos='fade-up' data-aos-delay={initialDelay + 400}>Gain Access</Button>
          </div>
        </div>
        <div className='hidden lg:block col-span-2' data-aos='fade-left' data-aos-delay={initialDelay + 1000}>
          <BrandBars containerClassName='translate-x-[20%]' barClassName='!h-16' />
        </div>
      </div>
    </div>
  )
}
