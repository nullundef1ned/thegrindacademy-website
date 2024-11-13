'use client';

import Blur from '@/components/Blur'
import IconifyIcon from '@/components/IconifyIcon'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const course: Course = {
  slug: 'advanced-javascript-fundamentals',
  title: 'Advanced JavaScript Fundamentals',
  shortDescription: 'Master modern JavaScript concepts and best practices',
  description: 'Dive deep into JavaScript with this comprehensive course covering ES6+, async programming, closures, and more. Perfect for developers looking to level up their JavaScript skills.',
  thumbnail: '/courses/javascript-fundamentals.jpg',
  duration: 100,
  introVideo: 'https://www.youtube.com/watch?v=example',
  images: [
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  lessons: [
    {
      title: 'Introduction to Modern JavaScript',
      description: 'Learn about the evolution of JavaScript and set up your development environment',
      duration: 45,
    },
    {
      title: 'ES6+ Features Deep Dive',
      description: 'Explore arrow functions, destructuring, spread operator and other ES6+ features',
      duration: 60,
    },
    {
      title: 'Asynchronous Programming',
      description: 'Master promises, async/await, and handling asynchronous operations',
      duration: 75,
    },
    {
      title: 'Closures and Scope',
      description: 'Understanding lexical scope, closures, and practical applications',
      duration: 55,
    }
  ],
}

export default function CoursePage() {
  const initialDelay = 300;

  const enrollmentURL = `/subscription?c=${course.slug}`;

  return (
    <main className='bg-background'>
      <div className='relative root-section !py-20 space-y-32 flex flex-col items-center'>
        <Link href='/' className='flex-shrink-0' data-aos='fade-up'>
          <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={268} height={66} />
        </Link>
        <div className='space-y-6 max-w-screen-lg p-4 flex flex-col items-center'>
          <div className='space-y-2'>
            <h1 className='text-5xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>{course.title}</h1>
            <p className='text-lg text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay + 100}>{course.shortDescription}</p>
          </div>
          <div className="flex items-center gap-2" data-aos='fade-up' data-aos-delay={initialDelay + 200}>
            <IconifyIcon icon='ri:timer-fill' className='text-accent flex items-center' />
            <p className='text-sm text-accent'>Course duration</p>
            <p className='text-sm white'>{course.duration} minutes</p>
          </div>
          <Button href={enrollmentURL} className='w-max mx-auto' data-aos='fade-up' data-aos-delay={initialDelay + 300}>Enroll Now</Button>
        </div>

        <div className='w-full border p-4' data-aos='fade-up' data-aos-delay={initialDelay + 400}>
          <video className='w-full h-[400px] lg:h-[680px] rounded-[2px] object-cover bg-primary-200/10 animate-pulse' poster='/images/default-thumbnail.jpg' autoPlay muted loop>
            <source src='/videos/landing-video.mp4' type='video/mp4' />
          </video>
        </div>
        <Blur className='absolute w-1/2 mx-auto !bg-white/10 h-40 -translate-y-60 -z-10' data-aos='fade-up' />
      </div>
      <div className='bg-[#00246B33]'>
        <div className="relative root-section !py-10 space-y-10">
          <div className='space-y-2 max-w-screen-md mx-auto'>
            <p className='text-accent text-xl font-medium' data-aos='fade-up'>Course Overview</p>
            <p className='text-white text-lg' data-aos='fade-up' data-aos-delay={initialDelay + 100}>{course.description}</p>
          </div>
          <div className="relative">
            <Blur className='absolute w-1/2 left-1/2 -translate-x-1/2 h-full' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 h-80'>
              {course.images.map((image, index) => (
                <div className='h-full object-cover p-3 border border-primary/10 rounded overflow-hidden bg-primary/10' data-aos='fade-up' data-aos-delay={initialDelay + 200 + (index * 100)}>
                  <div className='relative w-full h-full'>
                    <Image src={image} alt={`Course Image ${index + 1}`} className='object-cover' fill />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='max-w-screen-sm mx-auto flex flex-col items-center space-y-8'>
            <div className='space-y-2 text-center' data-aos='fade-up' data-aos-delay={initialDelay + 300}>
              <p className='text-accent text-2xl font-medium'>Course Lessons</p>
              <p className='text-muted text-sm'>What you can expect to learn</p>
            </div>

            {course.lessons.map((lesson, index) => (
              <div key={index}
                className='border rounded-[2px] p-6 flex justify-between relative w-full radial-gradient from-[#00246B26] to-[#4B7DE026]'
                data-aos='fade-up' data-aos-delay={initialDelay + 300 + (index * 100)}>
                <div className='absolute -top-1.5 -left-1.5 size-3 bg-[#353D50]' />
                <div className='absolute -top-1.5 -right-1.5 size-3 bg-[#353D50]' />
                <div className='absolute -bottom-1.5 -left-1.5 size-3 bg-[#353D50]' />
                <div className='absolute -bottom-1.5 -right-1.5 size-3 bg-[#353D50]' />
                <div className='flex flex-col space-y-2'>
                  <p className='text-accent text-lg font-medium'>{lesson.title}</p>
                  <p className='text-white text-sm'>{lesson.description}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <IconifyIcon icon='ri:timer-fill' className='text-accent flex items-center' />
                  <p className='text-xs text-accent flex-shrink-0'>{lesson.duration} minutes</p>
                </div>
              </div>
            ))}
            <Button href={enrollmentURL} className='w-max mx-auto' data-aos='fade-up'>Enroll Now</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
