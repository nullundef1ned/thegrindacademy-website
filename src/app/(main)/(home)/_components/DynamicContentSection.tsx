'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import { clsx } from 'clsx';
import { useQuery } from '@tanstack/react-query';
import useAxios from '@/hooks/useAxios';
import { IDynamicContent } from '@/app/_module/app.interfaces';

export default function DynamicContentSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<IDynamicContent[]>({
    queryKey: ['dynamic-content'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/dynamic-content')).data
    },
  })

  const content = data || [];
  const contentLoaded = content.length > 0 && !isLoading && !error;

  if (!contentLoaded) return null;

  return (
    <div className='root-section !py-10 space-y-20 flex flex-col items-center'>
      <div className='relative flex flex-col items-center w-full'>
        <Blur className='absolute w-full md:w-[70%] h-40 -translate-y-10' />
        <div className='space-y-4 w-full md:w-2/3'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Traditional Education (University) vs. {' '}
            <span className='text-primary-200'>
              The Grind Academy
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            United by the common goal of financial success, the following comparison outlines the real-world results typically experienced by an average university graduate versus a mentored student at <span className='font-gishaBold text-primary-200'>The Grind Academy</span>.
          </p>
        </div>
      </div>
      <div className="space-y-10 w-full md:w-10/12 lg:w-11/12 mx-auto">
        {content.map((content: IDynamicContent, index: number) => (
          <div key={index} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)} className="grid grid-cols-1 items-center md:grid-cols-2 gap-10">
            <div className='relative space-y-4'>
              <Blur className='absolute w-full h-full bg-white/10' />
              <p className='text-4xl font-gishaBold'>
                {content.title}
              </p>
              <p className='text-accent'>
                {content.content}
              </p>
            </div>
            <div className={clsx(index % 2 !== 0 && 'md:order-first', 'relative w-full h-96 p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
              <div className='relative w-full h-full'>
                <Image src={content.mediaUrl} alt={content.title} fill className='object-cover' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
