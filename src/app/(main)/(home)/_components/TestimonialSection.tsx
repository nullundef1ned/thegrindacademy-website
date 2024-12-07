'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { ITestimonial } from '@/app/_module/app.interfaces';

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
        <motion.div
          className="flex gap-4 h-[450px] w-full overflow-hidden cursor-pointer"
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos='fade-right'
                data-aos-delay={initialDelay + ((index + 1) * 200)}
                className={clsx(index % 3 == 0 && 'md:row-span-2', 'flex-shrink-0 w-[450px] relative p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
                <div className='relative w-full h-full'>
                  <Image src={testimonial.imageUrl} alt={`${testimonial.id}-testimonial`} fill className='object-cover' />
                </div>
              </div>
            ))}
            {/* Duplicate items for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className={clsx(index % 3 == 0 && 'md:row-span-2', 'flex-shrink-0 w-[400px] relative p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
                <div className='relative w-full h-full'>
                  <Image src={testimonial.imageUrl} alt={`${testimonial.id}-testimonial`} fill className='object-cover' />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
