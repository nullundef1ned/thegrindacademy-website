import Blur from '@/components/Blur'
import IconifyIcon from '@/components/IconifyIcon';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'

export default function CoursesPage() {
  const initialDelay = 400;

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
    {
      thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Business & Finance',
      description: 'Learn the essential strategies to boost your online presence, drive traffic, and convert leads.',
      slug: 'business-finance',
    },
  ]

  const canGoNext = false;
  const canGoPrev = false;

  const paginationStyle = 'size-10 grid place-items-center border rounded-full';
  const disabledPaginationStyle = 'bg-[#00246B26] border-[#E6EEFF1A] cursor-not-allowed';
  const enabledPaginationStyle = 'bg-[#0247CE40] border-[#E6EEFF1A] cursor-pointer';

  return (
    <Fragment>
      <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
        <div className='flex items-center bg-[#004DE830] border border-[#3377FF6B] rounded-full px-6 py-3 w-max'>
          <p className='text-sm text-primary-100'>All our courses comes with a certificate</p>
        </div>
        <div className='relative flex flex-col items-center'>
          <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10' />
          <div className='space-y-4 md:w-2/3'>
            <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
              Explore Our {' '}
              <span className='text-primary-200'>
                Courses
              </span>
            </h2>
            <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
              Choose from a wide range of skill-building courses designed to elevate your expertise and unlock new opportunities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full md:w-8/12 lg:w-10/12 mx-auto">
          {courses.map((course, index) => (
            <div
              key={index} data-aos='fade-up' data-aos-delay={initialDelay + ((index + 1) * 200)}
              className={clsx(index % 3 === 0 ? 'col-span-1 lg:col-span-2' : 'col-span-1', 'border rounded-[2px] p-6 relative radial-gradient from-[#00246B26] to-[#4B7DE026]')}>
              <div className='absolute -top-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -top-1.5 -right-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -right-1.5 size-3 bg-[#353D50]' />
              <div className="grid grid-cols-5 gap-4">
                <div className={clsx(index % 3 === 0 ? 'col-span-5 lg:col-span-2' : 'col-span-5', 'relative w-full h-80')}>
                  <Image src={course.thumbnail} alt={course.title} fill className='object-cover' />
                </div>
                <div className={clsx(index % 3 === 0 ? 'col-span-5 lg:col-span-3' : 'col-span-5', 'flex flex-col space-y-4 justify-between')}>
                  <div className='space-y-4'>
                    <p className='text-xl font-gishaBold'>
                      {course.title}
                    </p>
                    <hr className='w-full' />
                    <p className='text-accent'>
                      {course.description}
                    </p>
                  </div>
                  <Link href={`/courses/${course.slug}`} className='group text-primary-200 uppercase w-max'>
                    <div className='flex items-center space-x-1'>
                      <p className='font-medium
                      '>
                        Start Learning
                      </p>
                      <IconifyIcon icon='ri:arrow-right-up-line' className='flex items-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center space-x-4'>
          <div className={clsx(canGoPrev ? enabledPaginationStyle : disabledPaginationStyle, paginationStyle)}>
            <IconifyIcon icon='ri:arrow-left-s-line' size={16} className={clsx(!canGoPrev && 'opacity-40', 'flex items-center')} />
          </div>
          <div className={clsx(canGoNext ? enabledPaginationStyle : disabledPaginationStyle, paginationStyle)}>
            <IconifyIcon icon='ri:arrow-right-s-line' size={16} className={clsx(!canGoNext && 'opacity-40', 'flex items-center')} />
          </div>
        </div>

      </div>
    </Fragment >
  )
}
