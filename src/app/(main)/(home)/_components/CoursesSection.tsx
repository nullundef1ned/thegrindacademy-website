'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { ICourse } from '@/app/_module/app.interfaces';
import Video from '@/components/Video';

export default function CoursesSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<ICourse[]>({
    queryKey: ['courses', 'featured'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/course/featured')).data
    },
  })

  const courses = data || [];
  const coursesLoaded = courses.length > 0 && !isLoading && !error;

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10' />
        <div className='space-y-4 w-full md:w-1/2'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Learn Beyond your {' '}
            <span className='text-primary-200'>
              First Million
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            When new technologies emerge, <span className='font-gishaBold text-primary-200'>The Grind Academy</span> ensures you&apos;re first in line to capitalize. Our students receive cutting-edge updates every morning at 8 AM, keeping you informed and ahead of the curve.
          </p>
        </div>
      </div>
      {error && (
        <div className='w-full flex flex-col justify-center items-center space-y-4' data-aos='fade-up' data-aos-delay={initialDelay + 200}>
          <p className='text-accent text-center text-xl'>
            An error occurred while fetching the courses
          </p>
        </div>
      )}
      {coursesLoaded && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-8/12 lg:w-11/12 mx-auto">
          {courses.map((course: ICourse, index: number) => (
            <div
              key={index} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)}
              className='border rounded-md relative overflow-hidden'>
              <div className="flex flex-col">
                <Video src={course.media.introVideoUrl} poster={course.media.thumbnailUrl} />
                <Link href={`/c/${course.slug}`} className='flex flex-col space-y-4 p-4'>
                  <p className='text-lg font-gishaBold'>
                    {course.name}
                  </p>
                  <hr className='w-full' />
                  <p className='text-accent line-clamp-2 text-sm'>
                    {course.shortDescription}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {coursesLoaded && (
        <Button href='/courses' variant='outline' className='mx-auto' data-aos='fade-up' data-aos-delay={initialDelay + 200}>
          View All Courses
        </Button>
      )}
      {!coursesLoaded && (
        <div className='w-full flex flex-col justify-center items-center space-y-4' data-aos='fade-up' data-aos-delay={initialDelay + 200}>
          <p className='text-accent text-center text-xl'>
            No courses available at the moment
          </p>
          <p className='text-accent text-center text-sm'>
            Please check back soon for new courses
          </p>
        </div>
      )}
    </div>
  )
}
