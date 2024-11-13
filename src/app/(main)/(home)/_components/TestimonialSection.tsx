'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import { clsx } from 'clsx';

export default function TestimonialSection() {
  const initialDelay = 300;

  const testimonials = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
    },
  ]

  return (
    <div id='testimonials' className='root-section !py-10 space-y-10'>
      <div className='space-y-4'>
        <h2 className='text-4xl lg:text-5xl text-left font-gishaBold' data-aos='fade-up'>
          Our Students are {' '}
          <span className='text-primary-200'>
            Winning
          </span>
        </h2>
      </div>

      <div className='relative'>
        <Blur className='absolute w-1/2 h-1/2 translate-x-1/2 translate-y-1/2' />
        <div className="grid grid-flow-col auto-cols-[400px] lg:grid-rows-2 gap-4 h-[450px] w-full overflow-x-auto">
          {testimonials.map((course, index) => (
            <div
              key={index}
              data-aos='fade-right'
              data-aos-delay={initialDelay + ((index + 1) * 200)}
              className={clsx(index % 3 == 0 && 'md:row-span-2', 'col-span-1 relative w-full p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
              <div className='relative w-full h-full'>
                <Image src={course.thumbnail} alt={course.title} fill className='object-cover' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
