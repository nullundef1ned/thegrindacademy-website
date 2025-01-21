'use client';

import { clsx } from 'clsx'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { Button } from './ui/button';
import IconifyIcon from './IconifyIcon';
import { useQuery } from '@tanstack/react-query';
import { IStudentInterview, ITestimonial } from '@/app/_module/app.interfaces';
import environmentUtil from '@/utils/env.util';

export default function Header() {
  const [mobileNavigation, setMobileNavigation] = useState(false);

  const pathname = usePathname();
  const testimonialsQuery = useQuery<ITestimonial[]>({
    queryKey: ['testimonials'],
  });

  const interviewsQuery = useQuery<IStudentInterview[]>({
    queryKey: ['interviews'],
  });

  const testimonials = testimonialsQuery?.data || [];
  const interviews = interviewsQuery?.data || [];

  const areThereTestimonials = testimonials.length > 0;
  const areThereInterviews = interviews.length > 0;

  const navigation = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Courses',
      href: '/courses',
    },
    {
      name: 'Affiliate Program',
      href: '/affiliate-program',
    },
    areThereTestimonials && {
      name: 'Testimonials',
      href: '/#testimonials',
    },
    areThereInterviews && {
      name: 'Interviews',
      href: '/#interviews',
    },
    {
      name: 'Subscription',
      href: '/subscription',
    }
  ].filter(Boolean) as { name: string; href: string }[];

  const closeMobileNavigation = () => {
    setMobileNavigation(false);
  }

  return (
    <header className={clsx(mobileNavigation ? 'h-[100dvh] overflow-hidden fixed left-0 bg-background' : 'bg-background/30 sticky backdrop-blur-lg',
      'border-b border-muted/10 w-full top-0 z-30')}>
      <div className='flex items-center justify-between root-section'>
        <Link href='/' className='flex-shrink-0'>
          <Image src='/logos/logo.svg' alt='The Grind Academy Logo' className='flex-shrink-0' width={188} height={44} />
        </Link>
        <div className='hidden lg:flex items-center gap-4'>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={clsx(pathname === item.href && 'font-bold text-white', 'text-muted hover:font-bold transition-all')}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          <Button href={environmentUtil.DASHBOARD_URL} target='_blank' variant='outline'>Log in</Button>
          <Button href='/subscription'>Sign up</Button>
        </div>
        <div onClick={() => setMobileNavigation(!mobileNavigation)} className='lg:hidden bg-[#00246B66] size-8 flex flex-col items-center justify-center rounded cursor-pointer'>
          <IconifyIcon icon={mobileNavigation ? 'ri:close-circle-fill' : 'ri:menu-line'} className='text-primary-50 flex items-center' />
        </div>
      </div>
      {mobileNavigation &&
        <div className="space-y-8 root-section">
          <div className='flex items-center space-x-1 text-accent'>
            <p className='font-medium text-lg'>
              Navigate to
            </p>
            <IconifyIcon icon='ri:arrow-left-down-line' className='flex items-center text-2xl' />
          </div>
          <div className='flex flex-col gap-6'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileNavigation}
                className={clsx(pathname === item.href && 'font-bold text-white', 'text-accent text-xl hover:font-bold transition-all')}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-6'>
            <Button onClick={closeMobileNavigation} href='/subscription' className='w-full'>Sign up</Button>
            <Button onClick={closeMobileNavigation} href={environmentUtil.DASHBOARD_URL} target='_blank' variant='outline' className='w-full'>Log in</Button>
          </div>
        </div>
      }
    </header>
  )
}
