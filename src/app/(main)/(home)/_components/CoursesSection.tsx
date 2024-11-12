'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';

export default function CoursesSection() {
  const initialDelay = 300;

  const courses = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
      slug: 'business-finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
      slug: 'business-finance',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
      slug: 'business-finance',
    },
  ]

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10' />
        <div className='space-y-4 md:w-1/2'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Courses Tailored to {' '}
            <span className='text-primary-200'>
              Your Goals
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            Whether you&apos;re just starting or advancing your skills, our curated selection of courses covers a wide range of industries and disciplines
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-8/12 lg:w-11/12 mx-auto">
        {courses.map((course, index) => (
          <Link key={index} href={`/courses/${course.slug}`} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)}>
            <div
              className='border rounded-[2px] p-6 relative radial-gradient from-[#00246B26] to-[#4B7DE026]'>
              <div className='absolute -top-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -top-1.5 -right-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -right-1.5 size-3 bg-[#353D50]' />
              <div className="flex flex-col space-y-6">
                <div className='relative w-full h-80'>
                  <Image src={course.thumbnail} alt={course.title} fill className='object-cover' />
                </div>
                <div className='flex flex-col space-y-4'>
                  <p className='text-xl font-gishaBold'>
                    {course.title}
                  </p>
                  <hr className='w-full' />
                  <p className='text-accent'>
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Button href='/courses' variant='outline' className='mx-auto' data-aos='fade-up' data-aos-delay={initialDelay + 200}>
        View All Courses
      </Button>
    </div>
  )
}
