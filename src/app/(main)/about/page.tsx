'use client';

import Blur from '@/components/Blur';
import BrandBars from '@/components/BrandBars';
import { Button } from '@/components/ui/button';
import { clsx } from 'clsx';
import Image from 'next/image';
import React, { Fragment } from 'react'

export default function AboutPage() {
  const initialDelay = 300;

  const information = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Vision',
      description: 'With a passion for empowering individuals through knowledge and skills, Dexter founded Grind Academy to provide accessible, top-tier education to aspiring professionals worldwideWith a passion for empowering individuals through knowledge and skills',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'The Mission',
      description: 'With a passion for empowering individuals through knowledge and skills, Dexter founded Grind Academy to provide accessible, top-tier education to aspiring professionals worldwideWith a passion for empowering individuals through knowledge and skills',
    },
  ]

  return (
    <Fragment>
      <div className='root-section !py-10 space-y-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
          <div className='space-y-6'>
            <div className='space-y-4'>
              <h1 className='text-3xl lg:text-5xl font-gishaBold' data-aos='fade-right' data-aos-delay={initialDelay}>
                Meet <span className='text-primary-200'>Dexter</span>, the Visionary behind The Grind Academy
              </h1>
              <h5 className='text-accent' data-aos='fade-right' data-aos-delay={initialDelay}>
                With a passion for empowering individuals through knowledge and skills, Dexter founded Grind Academy to provide accessible,
                top-tier education to aspiring professionals worldwideWith a passion for empowering individuals through knowledge and skills
              </h5>
              <BrandBars containerClassName='-translate-x-[44%] w-[180%]' barClassName='!h-14 lg:!h-16' />
            </div>
          </div>
          <div className='flex flex-col justify-center relative' data-aos='fade-left' data-aos-delay={initialDelay}>
            <Blur className='absolute w-full h-40 translate-x-[44%]' />
            <div className='w-full border border-primary/10 bg-primary/10 p-4'>
              <div className="h-96 relative w-full">
                <Image src='/images/default-thumbnail.jpg' alt='Dexter' fill className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
        <div className="space-y-10 w-full lg:w-9/12 mx-auto">
          {information.map((course, index) => (
            <div key={index} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)} className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
              <div className={clsx(index % 2 !== 0 && 'md:order-last', 'relative w-full h-80 p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
                <div className='relative w-full h-full'>
                  <Image src={course.thumbnail} alt={course.title} fill className='object-cover' />
                </div>
              </div>
              <div className='relative space-y-4'>
                <Blur className='absolute w-full h-full bg-white/10' />
                <p className='text-4xl font-gishaBold'>
                  {course.title}
                </p>
                <p className='text-accent'>
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='root-section !py-10 grid place-items-center h-[60dvh] relative'>
        <Blur className='absolute w-1/2 h-1/2 -z-10' />
        <div className='space-y-10 flex flex-col items-center w-full md:w-9/12 mx-auto'>
          <h1 className='text-2xl lg:text-4xl text-center font-gishaBold' data-aos='fade-up' data-aos-delay={initialDelay}>
            Ready to start your journey with <span className='text-primary-200'>Dexter</span> and <span className='text-primary-200'>The Grind Academy Community?</span> Explore our courses and take the first step towards achieving your goals.
          </h1>
          <Button href='/subscription' className='mx-auto' data-aos='fade-up' data-aos-delay={initialDelay}>
            Start Your Journey
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
