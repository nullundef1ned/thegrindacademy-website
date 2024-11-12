'use client';

import React from 'react'
import Blur from '@/components/Blur';
import IconifyIcon from '@/components/IconifyIcon';

export default function CourseOfferingsSection() {
  const initialDelay = 300;
  const offerings = [
    {
      icon: 'ri:vip-crown-fill',
      title: 'Build Skills for the future',
      description: 'Learn cutting-edge techniques, work on high-impact projects, and unlock opportunities that will take your career to the next level. Gain the confidence to grow and scale your business.',
    },
    {
      icon: 'ri:vip-crown-fill',
      title: 'Build Skills for the future',
      description: 'Learn cutting-edge techniques, work on high-impact projects, and unlock opportunities that will take your career to the next level. Gain the confidence to grow and scale your business.',
    },
    {
      icon: 'ri:vip-crown-fill',
      title: 'Build Skills for the future',
      description: 'Learn cutting-edge techniques, work on high-impact projects, and unlock opportunities that will take your career to the next level. Gain the confidence to grow and scale your business.',
    },
  ]

  return (
    <div className='root-section !py-10 space-y-10'>
      <div className='relative flex flex-col items-center'>
        <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10' />
        <div className='space-y-4 md:w-1/2'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Unlock Financial Power in {' '}
            <span className='text-primary-200'>
              30 days
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            Access Top-Tier Learning Resources, Expert Guidance One-on-One, Scale Rapidly to 7 Figures/ Month
          </p>
        </div>
      </div>
      <div className='grid md:w-1/2 mx-auto lg:w-full grid-cols-1 lg:grid-cols-3 gap-8'>
        {offerings.map((offering, index) => (
          <div
            key={index}
            data-aos='fade-up'
            data-aos-delay={initialDelay + ((index + 1) * 200)}
            className='border p-6 space-y-6 rounded radial-gradient from-[#00246B26] to-[#4B7DE026]'>
            <div className='rounded p-2 grid place-items-center radial-gradient from-[#00246B26] to-[#4B7DE026] size-10 border'>
              <IconifyIcon icon={offering.icon} className='text-white' />
            </div>
            <div className='space-y-2'>
              <p className='text-xl font-gishaBold'>{offering.title}</p>
              <p className='text-accent'>
                {offering.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
