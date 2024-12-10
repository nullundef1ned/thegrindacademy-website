'use client';

import React from 'react'
import Blur from '@/components/Blur'
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { ITestimonial } from '@/app/_module/app.interfaces';
import InfiniteScroll from '@/components/InfiniteScroll';

export default function TestimonialSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<ITestimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/testimonial')).data
    },
  })

  const testimonials = data || [];
  const testimonialsLoaded = testimonials.length > 0 && !isLoading && !error;

  if (!testimonialsLoaded) return null;

  return (
    <div id='testimonials' className='root-section !py-32 space-y-10'>
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
        <InfiniteScroll<ITestimonial> items={testimonials} imageKey='imageUrl' initialDelay={initialDelay} />
      </div>
    </div>
  )
}
