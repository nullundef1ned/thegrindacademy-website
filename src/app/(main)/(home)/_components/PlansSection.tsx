'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import useCurrency from '@/hooks/useCurrency';
import IconifyIcon from '@/components/IconifyIcon';
import { clsx } from 'clsx';

export default function PlansSection() {
  const initialDelay = 300;

  const { formatCurrency } = useCurrency();

  const plans = [
    {
      name: 'Month',
      price: 10000,
      description: 'Access to all courses and resources',
      features: [
        'All the benefits of the Three month Plan',
      ],
      deal: false
    },
    {
      name: 'Three Months',
      price: 23000,
      description: 'Access to all courses and resources',
      features: [
        'Unlimited access to all courses',
        'Access to all resources',
        '1-on-1 mentorship with the instructor',
        'Certificate of completion',
      ],
      deal: true
    },
    {
      name: 'Year',
      price: 390000,
      description: 'Access to all courses and resources',
      features: [
        'All the benefits of the Three month Plan',
      ],
      deal: false
    }
  ]

  return (
    <div className='root-section !pt-10 !pb-20 space-y-10 flex flex-col items-center'>
      <div className='relative flex flex-col items-center w-full'>
        <Blur className='absolute w-full md:w-[60%] h-40 -translate-y-10' />
        <div className='space-y-4 md:w-1/2'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            Select your {' '}
            <span className='text-primary-200'>
              Plan
            </span>
          </h2>
          <p className='text-accent text-center' data-aos='fade-up' data-aos-delay={initialDelay}>
            Unlock all courses with simple and flexible pricing
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-8/12 lg:w-11/12 mx-auto">
        {plans.map((plan, index) => (
          <div key={index}
            data-aos='fade-up'
            data-aos-delay={initialDelay + ((index + 1) * 200)}
            className={clsx(plan.deal ? 'border-[#004DE894]' : 'border-[#004DE838]', 'border h-max rounded p-5 space-y-6 relative bg-[#00246B29] overflow-hidden')}>
            <div className='flex items-center justify-between gap-2'>
              <Image src='/logos/logomark.svg' width={40} height={40} alt='The Grind Logomark' />
              {plan.deal &&
                <div className='bg-primary/80 rounded px-2 py-1'>
                  <p className='text-sm font-medium'>Best Deal</p>
                </div>
              }
            </div>
            <div className='space-y-2'>
              <p className='text-3xl font-gishaBold'>{formatCurrency(plan.price)} <span className='lowercase text-xs font-sans'>every {plan.name}</span></p>
              <p className='text-primary-100'>{plan.description}</p>
            </div>
            <div>
              <Button href={`/subscription?plan=${plan.name}`} variant={plan.deal ? 'default' : 'secondary'} className='w-full'>Get Started</Button>
            </div>
            <div className='flex items-center gap-2 opacity-50'>
              <hr className='w-full border-primary-100' />
              <p className='text-primary-100 flex-shrink-0 text-sm font-light'>What you get</p>
              <hr className='w-full border-primary-100' />
            </div>
            <div className='space-y-2'>
              {plan.features.map((feature, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <IconifyIcon icon="ri:checkbox-circle-fill" className='text-primary-100 flex-shrink-0' />
                  <p className='text-primary-100 text-sm'>{feature}</p>
                </div>
              ))}
            </div>
            {plan.deal && <Blur className='absolute w-full h-full -translate-y-[150%] -z-10' />}
            {plan.deal && <Blur className='absolute w-full h-full -translate-y-[30%] -z-10' />}
            {plan.deal && <Blur className='absolute w-1/2 h-full -translate-y-[100%] -translate-x-0 -z-10' />}
          </div>
        ))}
      </div>
      <div
        data-aos='fade-down' data-aos-delay={initialDelay + 400}
        className='w-full flex flex-col items-center space-y-3 !mt-3'>
        <Image src="/images/dna.svg" width={60} height={60} alt='Do nothing arrow' />
        <div
          className='group flex flex-col items-center bg-primary/10 border border-[#B0CAFF26] p-4 relative -rotate-12 hover:rotate-0 translate-x-4 transition-all duration-300'>
          <div className='absolute -top-0.5 -left-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -top-0.5 -right-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -bottom-0.5 -left-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -bottom-0.5 -right-0.5 size-1 bg-[#353D50]' />
          <p className='font-medium text-lg group-hover:hidden transition-all duration-300'>Or do nothing 🤷🏽‍♂️</p>
          <p className='font-medium text-lg group-hover:block hidden transition-all duration-300'>Start something today ✅</p>
          <p className='text-primary-100 text-sm group-hover:hidden transition-all duration-300'>And watch netflix all day</p>
          <p className='text-primary-100 text-sm group-hover:block hidden transition-all duration-300'>Get subscribed today 🚀</p>
          <Button href='/subscription' size="sm" className='group-hover:block hidden transition-all duration-300 mt-4'>Get Started</Button>
        </div>
      </div>
    </div>
  )
}
