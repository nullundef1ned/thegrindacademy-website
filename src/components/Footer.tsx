'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import IconifyIcon from './IconifyIcon'
import { useQuery } from '@tanstack/react-query'
import { IMeta } from '@/app/_module/app.interfaces'
import useAxios from '@/hooks/useAxios'

export default function Footer() {
  const axiosHandler = useAxios();

  const { data } = useQuery<IMeta>({
    queryKey: ['meta'],
    queryFn: async () => (await axiosHandler.get('/website-content/meta')).data
  })

  const meta = data || null;

  const quickLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Subscription', href: '/subscription' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/#faqs' },
  ]

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]

  const socialLinks = meta?.socialMediaLinks || []

  return (
    <footer className='bg-[#12192866] border-t border-[#B0CAFF26] relative overflow-hidden'>
      <div className="root-section !pt-14 !pb-32 flex flex-col md:flex-row items-start gap-10 justify-between">
        <Link href='/'>
          <Image src='/logos/secondary-logo.svg' alt='The Grind Academy Secondary Logo' width={160} height={70} />
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-auto">
          {socialLinks.length == 0 && (
            <div className="space-y-6">
            </div>
          )}
          <div className="space-y-6">
            <p className='text-primary-100 font-semibold'>Quick Links</p>
            <div className='space-y-4 flex flex-col'>
              {quickLinks.map((link, index) => (
                <Link key={index} className='text-primary-200 hover:opacity-70 transition-opacity' href={link.href}>{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <p className='text-primary-100 font-semibold'>Legal Links</p>
            <div className='space-y-4 flex flex-col'>
              {legalLinks.map((link, index) => (
                <Link key={index} className='text-primary-200 hover:opacity-70 transition-opacity' href={link.href}>{link.name}</Link>
              ))}
            </div>
          </div>
          {socialLinks.length > 0 && (
            <div className="space-y-6">
              <p className='text-primary-100 font-semibold'>Socials</p>
              <div className='flex gap-4'>
                {socialLinks.map((link, index) => (
                  <Link key={index} target='_blank' className='text-primary-200 hover:opacity-70 transition-opacity' href={link.url}>
                    <IconifyIcon icon={`ri:${link.type}-fill`} size={24} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='absolute -bottom-16 left-1/2 -translate-x-1/2 w-full h-40'>
        <Image src='/logos/landscape-logo.svg' alt='The Grind Academy Primary Logo' fill className='object-cover' />
      </div>
    </footer>
  )
}
