'use client';

import { clsx } from 'clsx'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

export default function Header() {
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
      name: 'Subscription',
      href: '/subscription',
    }
  ]

  const pathname = usePathname();

  return (
    <div className='border-b border-muted/10 w-full sticky top-0 bg-background/30 backdrop-blur-lg z-10'>
      <div className='flex items-center justify-between root-section'>
        <Image src='/logos/logo.svg' alt='The Grind Academy Logo' width={188} height={44} />
        <div className='hidden md:flex items-center gap-4'>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={clsx(pathname === item.href && 'font-bold text-white', 'text-muted hover:font-bold transition-all')}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <Button variant='outline'>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  )
}
