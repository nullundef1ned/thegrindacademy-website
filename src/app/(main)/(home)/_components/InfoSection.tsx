'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import { clsx } from 'clsx';

export default function InfoSection() {
  const initialDelay = 300;

  const information = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
    },
  ]

  return (
    <div className='root-section !py-10 space-y-20 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <Blur className='absolute w-full md:w-[70%] h-40 -translate-y-10' />
        <div className='space-y-4 md:w-2/3'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            What you stand to get from joining {' '}
            <span className='text-primary-200'>
              The Grind
            </span>
          </h2>
        </div>
      </div>
      <div className="space-y-10 w-full md:w-8/12 lg:w-11/12 mx-auto">
        {information.map((course, index) => (
          <div key={index} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)} className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
            <div className='relative space-y-4'>
              <Blur className='absolute w-full h-full bg-white/10' />
              <p className='text-4xl font-gishaBold'>
                {course.title}
              </p>
              <p className='text-accent'>
                {course.description}
              </p>
            </div>
            <div className={clsx(index % 2 !== 0 && 'md:order-first', 'relative w-full h-96 p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
              <div className='relative w-full h-full'>
                <Image src={course.thumbnail} alt={course.title} fill className='object-cover' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
