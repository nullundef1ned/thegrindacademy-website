'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import BrandBars from '@/components/BrandBars';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { IStudentInterview } from '@/app/_module/app.interfaces';

export default function SuccessStoriesSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<IStudentInterview[]>({
    queryKey: ['interviews'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/student-interview')).data
    },
  })

  const interviews = data || [];
  const interviewsLoaded = interviews.length > 0 && !isLoading && !error;

  if (!interviewsLoaded) return null;

  return (
    <div id='interviews' className='root-section !py-32 space-y-10'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full'>
        <div className='space-y-4'>
          <h2 className='text-3xl lg:text-5xl text-left font-gishaBold' data-aos='fade-right'>
            Student Success Stories
          </h2>
          <p className='text-muted' data-aos='fade-right' data-aos-delay={initialDelay}>
            Hear from our students about how The Grind Academy transformed their learning journey and helped them achieve their goals
          </p>
        </div>
        <div className='hidden lg:flex flex-col justify-center relative' data-aos='fade-left'>
          <Blur className='absolute w-full h-40 translate-x-[44%]' />
          <BrandBars containerClassName='translate-x-[44%]' barClassName='!h-16' />
        </div>
      </div>
      <Carousel opts={{ loop: true, active: true, dragFree: true }} className='w-full'>
        <CarouselContent>
          {interviews.map((interview: IStudentInterview, index: number) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-4 border border-[#004DE838] rounded space-y-4 overflow-hidden bg-[#00246B29]'>
                <div className='relative w-full h-80'>
                  <Image src={interview.mediaUrl} alt={interview.fullName} fill className='object-cover' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <p className='text-3xl font-gishaBold select-none'>{interview.fullName}</p>
                  <p className='text-accent text-sm line-clamp-3 select-none'>{interview.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
