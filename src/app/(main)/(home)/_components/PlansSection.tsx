'use client';

import React from 'react'
import Blur from '@/components/Blur'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import useCurrency from '@/hooks/useCurrency';
import IconifyIcon from '@/components/IconifyIcon';
import { clsx } from 'clsx';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import pluralize from 'pluralize';
import { ISubscriptionPlan } from '@/app/(main)/subscription/_module/subscription.interface';


export default function PlansSection() {
  const initialDelay = 300;

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<ISubscriptionPlan[]>({
    queryKey: ['subscription-plans'],
    queryFn: async () => {
      return (await axiosHandler.get('website-content/subscription/plan')).data
    },
  })

  const { formatCurrency } = useCurrency();

  const plans = data || [];
  const plansLoaded = plans.length > 0 && !isLoading && !error;

  const generateFrequency = (plan: ISubscriptionPlan) => {
    return `${plan.duration == 1 ? '' : plan.duration} ${pluralize(plan.frequency, plan.duration)}`
  }

  if (!plansLoaded) return null;

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
            className={clsx(plan.isDeal ? 'border-[#004DE894]' : 'border-[#004DE838]', 'border h-max rounded p-5 space-y-6 relative bg-[#00246B29] overflow-hidden')}>
            <div className='flex items-center justify-between gap-2'>
              <Image src='/logos/logomark.svg' width={40} height={40} alt='The Grind Logomark' />
              {plan.isDeal &&
                <div className='bg-primary/80 rounded px-2 py-1'>
                  <p className='text-sm font-medium whitespace-nowrap'>Best Deal</p>
                </div>
              }
            </div>
            <div className='space-y-2'>
              {plan.upSellPrice && <p className='text-primary-100 line-through'>{formatCurrency(plan.upSellPrice)}</p>}
              <p className='text-3xl font-gishaBold'>{formatCurrency(plan.price)} <span className='lowercase text-xs font-sans truncate'>every {generateFrequency(plan)}</span></p>
            </div>
            <div>
              <Button href={`/subscription?plan=${plan.name}`} variant={plan.isDeal ? 'default' : 'secondary'} className='w-full'>Get Started</Button>
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
                  <p className='text-primary-100 text-sm'>{feature.feature.content}</p>
                </div>
              ))}
            </div>
            {plan.isDeal && <Blur className='absolute w-full h-full -translate-y-[150%] -z-10' />}
            {plan.isDeal && <Blur className='absolute w-full h-full -translate-y-[30%] -z-10' />}
            {plan.isDeal && <Blur className='absolute w-1/2 h-full -translate-y-[100%] -translate-x-0 -z-10' />}
          </div>
        ))}
      </div>
      <div
        data-aos='fade-down' data-aos-delay={initialDelay}
        className='w-full flex flex-col items-center space-y-3 !mt-3'>
        <Image src="/images/dna.svg" width={60} height={60} alt='Do nothing arrow' />
        <div
          className='group flex flex-col items-center bg-primary/10 border border-[#B0CAFF26] p-4 relative -rotate-12 hover:rotate-0 translate-x-4 transition-all duration-300'>
          <div className='absolute -top-0.5 -left-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -top-0.5 -right-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -bottom-0.5 -left-0.5 size-1 bg-[#353D50]' />
          <div className='absolute -bottom-0.5 -right-0.5 size-1 bg-[#353D50]' />
          <p className='font-medium text-xl group-hover:hidden transition-all duration-300'>Or do nothing 🤷🏽‍♂️</p>
          <p className='font-medium text-lg text-center group-hover:block hidden transition-all duration-300'>I know you want more <br /> for yourself🫡</p>
          <p className='text-primary-100 text-lg group-hover:hidden transition-all duration-300'>And watch netflix all day</p>
          <Button href='/subscription' size="sm" className='group-hover:block hidden transition-all duration-300 mt-4'>Start Here</Button>
        </div>
      </div>
    </div>
  )
}
