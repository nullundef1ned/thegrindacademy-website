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
      title: 'Success Probability',
      description: 'This section evaluates and compares the perceived chances of success between traditional university graduates and mentored students at The Grind Academy',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Speed of Achievement',
      description: 'A Real Life difference in duration it takes for students at The Grind Academy to complete their mentorship & make money Vs an average University student. ',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Commitment Required/Effort and Sacrifice',
      description: 'A quick contrast of the level of effort and personal sacrifice required from students at traditional universities with those at The Grind Academy',
    },
  ]

  return (
    <div className='root-section !py-10 space-y-20 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <Blur className='absolute w-full md:w-[70%] h-40 -translate-y-10' />
        <div className='space-y-4 md:w-2/3'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Traditional Education(University) vs. {' '}
            <span className='text-primary-200'>
              The Grind Academy
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            United by the common goal of financial success, the following comparison outlines the real-world results typically experienced by an average university graduate versus a mentored student at <span className='font-gishaBold text-primary-200'>The Grind Academy</span>.
          </p>
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
