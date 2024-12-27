'use client';

import React from 'react'
import Blur from '@/components/Blur'
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { ITestimonial } from '@/app/_module/app.interfaces';
import InfiniteScroll from '@/components/InfiniteScroll';
import Image from 'next/image';

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
        <div className='grid md:hidden grid-cols-1 lg:grid-cols-3 gap-4'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-3 border border-primary/10 rounded overflow-hidden bg-primary/10">
              <div className='relative w-full h-80'>
                <Image src={testimonial.imageUrl} alt={testimonial.id} fill className='absolute w-full h-full object-cover' />
              </div>
            </div>
          ))}
        </div>
        <InfiniteScroll<ITestimonial> items={testimonials} imageKey='imageUrl' initialDelay={initialDelay} />
      </div>
    </div>
  )
}
