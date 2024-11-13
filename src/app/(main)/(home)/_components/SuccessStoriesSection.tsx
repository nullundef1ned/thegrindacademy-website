'use client';

import React from 'react'
import Blur from '@/components/Blur'
import Image from 'next/image';
import BrandBars from '@/components/BrandBars';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function SuccessStoriesSection() {
  const initialDelay = 300;

  const stories = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'John Doe',
      description: 'I was able to land a job in finance after completing the Business & Finance course. The course was very helpful in preparing me for the interview process and I was able to secure a position shortly after graduating.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Jane Doe',
      description: 'I was able to land a job in finance after completing the Business & Finance course. The course was very helpful in preparing me for the interview process and I was able to secure a position shortly after graduating.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sarah Johnson',
      description: 'I was able to land a job in finance after completing the Business & Finance course. The course was very helpful in preparing me for the interview process and I was able to secure a position shortly after graduating.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Michael Chen',
      description: 'The programming bootcamp exceeded my expectations. Within 3 months of completing it, I transitioned from retail to a junior developer role at a tech startup.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Emily Rodriguez',
      description: 'The digital marketing course gave me the skills to start my own social media consulting business. The practical assignments and mentor feedback were invaluable.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'James Wilson',
      description: 'Thanks to the data science course, I was able to pivot my career into analytics. The curriculum was comprehensive and the projects helped build my portfolio.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sofia Patel',
      description: 'The UX/UI design course helped me understand user-centered design principles. I now work as a product designer at a major tech company.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'David Kim',
      description: 'The cybersecurity course provided hands-on experience with real-world scenarios. It prepared me well for my current role as a security analyst.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Rachel Thompson',
      description: 'The project management certification course helped me advance in my career. The agile methodologies I learned are essential in my daily work.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Marcus Brown',
      description: 'The blockchain development course was cutting-edge and comprehensive. It helped me break into Web3 development and join a promising startup.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Anna Martinez',
      description: 'The cloud computing course gave me deep AWS knowledge. I successfully transitioned from system admin to cloud architect within months.'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Thomas Lee',
      description: 'The AI/ML course curriculum was exactly what I needed. The practical projects helped me build a strong portfolio that impressed employers.'
    },
  ]

  return (
    <div id='interviews' className='root-section !py-10 space-y-10'>
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
          {stories.map((story, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-4 border border-[#004DE838] rounded space-y-4 overflow-hidden bg-[#00246B29]'>
                <div className='relative w-full h-80'>
                  <Image src={story.thumbnail} alt={story.title} fill className='object-cover' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <p className='text-3xl font-gishaBold select-none'>{story.title}</p>
                  <p className='text-accent text-sm line-clamp-3 select-none'>{story.description}</p>
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
