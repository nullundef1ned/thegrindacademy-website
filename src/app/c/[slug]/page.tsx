'use client';

import Blur from '@/components/Blur'
import IconifyIcon from '@/components/IconifyIcon'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { ICourse } from '@/app/_module/app.interfaces';
import pluralize from 'pluralize';
import InfiniteScroll from '@/components/InfiniteScroll';
import { useQuery } from '@tanstack/react-query';
import useAxios from '@/hooks/useAxios';
import LoadingIcons from 'react-loading-icons';
import Video from '@/components/Video';

export default function CoursePage({ params }: { params: { slug: string } }) {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, isRefetching, isError, refetch } = useQuery<ICourse>({
    queryKey: ['course', params.slug],
    queryFn: async () => {
      return (await axiosHandler.get(`/website-content/course/${params.slug}`)).data
    },
    retry: 0
  })

  const course = data || null;

  if (isLoading || (isRefetching && isError)) return (
    <div className='root-section !py-20 space-y-32 h-full flex flex-col items-center'>
      <Blur className='absolute w-1/2 mx-auto !bg-white/10 h-40 -translate-y-32' data-aos='fade-up' />
      <Link href='/' className='flex-shrink-0 !mt-0' data-aos='fade-up'>
        <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={268} height={66} />
      </Link>
      <div className='space-y-4 flex flex-col items-center h-[50dvh] justify-center'>
        <LoadingIcons.TailSpin stroke='#00246B' strokeWidth={2} height={45} width={45} />
      </div>
    </div>
  );

  if (!course) return (
    <div className='root-section !py-20 space-y-32 flex flex-col items-center'>
      <Blur className='absolute w-1/2 mx-auto !bg-white/10 h-40 -translate-y-32' data-aos='fade-up' />
      <Link href='/' className='flex-shrink-0 !mt-0' data-aos='fade-up'>
        <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={268} height={66} />
      </Link>
      <div className='space-y-4 flex flex-col items-center h-[50dvh] justify-center'>
        <Image src='/images/empty-state.svg' alt='Empty State' width={160} height={160} />
        <p className='text-center text-xl font-semibold'>
          We can&apos;t seem to find that one.
        </p>
        <p className='text-accent text-center text-sm'>
          The course you are looking might have been removed or does not exist.
        </p>
        <Button size="sm" variant='secondary' href='/courses'>Check out some of our courses</Button>
      </div>
    </div>
  );

  if (isError) return (
    <div className='root-section !py-20 space-y-32 h-full flex flex-col items-center'>
      <Blur className='absolute w-1/2 mx-auto !bg-white/10 h-40 -translate-y-32' data-aos='fade-up' />
      <Link href='/' className='flex-shrink-0 !mt-0' data-aos='fade-up'>
        <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={268} height={66} />
      </Link>
      <div className='space-y-4 flex flex-col items-center h-[50dvh] justify-center'>
        <p className='text-center text-4xl font-semibold'>Uh oh!</p>
        <p className='text-accent text-center text-base'>
          Looks like something went wrong
        </p>
        <Button size="sm" onClick={() => refetch()}>Please try again</Button>
      </div>
    </div>
  )

  const courseDuration = course.lessons.reduce((acc, lesson) => acc + lesson.studyTimeInMinutes, 0) || 0;

  const enrollmentURL = `/subscription?enrollment-course=${course.slug}`;

  return (
    <Fragment>
      <div id='#' className='relative root-section !py-20 space-y-32 flex flex-col items-center'>
        <Blur className='absolute w-1/2 mx-auto !bg-white/10 h-40 -translate-y-32' data-aos='fade-up' />
        <Link href='/' className='flex-shrink-0 !mt-0' data-aos='fade-up'>
          <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={268} height={66} />
        </Link>
        <div className='space-y-6 max-w-screen-lg p-4 flex flex-col items-center'>
          <div className='space-y-2'>
            <h1 className='text-5xl font-gishaBold text-center' data-aos='fade-up' data-aos-delay={initialDelay}>{course.name}</h1>
            <p className='text-lg text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay + 100}>{course.shortDescription}</p>
          </div>
          <div className="flex items-center gap-2" data-aos='fade-up' data-aos-delay={initialDelay + 200}>
            <IconifyIcon icon='ri:timer-fill' className='text-accent flex items-center' />
            <p className='text-sm text-accent'>Course duration</p>
            <p className='text-sm white'>{courseDuration} {pluralize('minute', courseDuration)}</p>
          </div>
          <Button href={enrollmentURL} className='w-max mx-auto' data-aos='fade-up' data-aos-delay={initialDelay + 300}>Enroll Now</Button>
        </div>

        <div className='w-full border p-4' data-aos='fade-up' data-aos-delay={initialDelay + 400}>
          <Video
            src={course.media.introVideoUrl}
            poster={course.media.thumbnailUrl}
          />
        </div>
      </div>
      <div className='bg-[#00246B33]'>
        <div className="relative root-section !py-10 space-y-10">
          <div className='space-y-2 max-w-screen-md mx-auto'>
            <p className='text-accent text-xl font-medium' data-aos='fade-up'>Course Overview</p>
            <p className='text-white text-lg' data-aos='fade-up' data-aos-delay={initialDelay + 100}>{course.description}</p>
          </div>
          <div className="relative">
            <Blur className='absolute w-1/2 left-1/2 -translate-x-1/2 h-full' />
            <InfiniteScroll items={course.media.imageUrls} initialDelay={initialDelay} height='350px' />
          </div>
        </div>
      </div>
      <div className='max-w-screen-sm mx-auto py-10 flex flex-col items-center space-y-8'>
        <div className='space-y-2 text-center' data-aos='fade-up' data-aos-delay={initialDelay + 300}>
          <p className='text-accent text-2xl font-medium'>Course Lessons</p>
          <p className='text-muted text-sm'>What you can expect to learn</p>
        </div>

        <div className='w-full space-y-4 flex flex-col gap-4' data-aos='fade-up' data-aos-delay={initialDelay + 400}>
          {course.lessons.sort((a, b) => a.position - b.position).map((lesson, index) => (
            <div key={index}
              className='border rounded-md p-6 flex justify-between relative w-full'>
              {/* <div className='absolute -top-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -top-1.5 -right-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -left-1.5 size-3 bg-[#353D50]' />
              <div className='absolute -bottom-1.5 -right-1.5 size-3 bg-[#353D50]' /> */}
              <div className='flex flex-col space-y-2'>
                <p className='text-accent text-base font-medium'>{lesson.title}</p>
                {lesson.description && (
                  <p className='text-white text-sm'>{lesson.description}</p>
                )}
              </div>
              <div className='flex items-center gap-2'>
                <IconifyIcon icon='ri:timer-fill' className='text-accent flex items-center' />
                <p className='text-xs text-accent flex-shrink-0'>{lesson.studyTimeInMinutes} {pluralize('minute', lesson.studyTimeInMinutes)}</p>
              </div>
            </div>
          ))}
        </div>
        <Button href={enrollmentURL} className='w-max mx-auto'>Enroll Now</Button>
      </div>
    </Fragment>
  )
}
