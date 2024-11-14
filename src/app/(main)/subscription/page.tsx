'use client';

import React, { useRef, useState } from 'react'
import Blur from '@/components/Blur'
import useCurrency from '@/hooks/useCurrency';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { event } from 'nextjs-google-analytics';

export default function SubscriptionPage() {

  const { formatCurrency } = useCurrency();

  const form = useRef<HTMLFormElement>(null);

  const [autoRenewal, setAutoRenewal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    event('subscription_plan_selected', { category: "Plan", label: plan });
  }

  const toggleAutoRenewal = () => {
    setAutoRenewal(!autoRenewal);
    event('subscription_auto_renewal_toggled', { category: "Auto Renewal", label: autoRenewal ? "Enabled" : "Disabled" });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const plans = [
    {
      name: 'Month',
      price: 30000,
      description: 'Access to multiple wealth creation skills',
      features: [
        'Access to multiple wealth creation skills',
        '30 Day Wealth Accelerator challenge',
        'Access to private community',
        'Direct access to millionaire mentors'
      ],
      deal: false
    },
    {
      name: 'Three Months',
      price: 75000,
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
      price: 300000,
      description: 'Access to all courses and resources',
      features: [
        'All the benefits of the Three month Plan',
      ],
      deal: false
    }
  ]

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center' data-aos='fade-up'>
      <div className='w-full md:w-2/3 lg:w-1/3 flex flex-col space-y-10'>
        <div className='space-y-2 flex flex-col items-center'>
          <p className='text-2xl font-gishaBold text-center'>Get started on your journey</p>
          <p className='text-base text-accent text-center'>Fill in the information needed below and select a plan to start Grinding</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-4 w-full relative'>
          <Blur className='absolute w-full h-full -z-10' />
          <Input type='text' required name='fullName' icon='ri:user-6-fill' placeholder='Full Name' />
          <Input type='email' required name='email' icon='ri:mail-fill' placeholder='Email Address' />
          <Input type='text' required name='telegramUsername' icon='ri:telegram-fill' placeholder='Telegram Username' />
          <Input type='text' name='referalCode' icon='ri:share-fill' placeholder='Referal code' />
        </form>

        <div className='flex flex-col gap-4 w-full'>
          <p className='font-gishaBold text-3xl text-center'>Select a plan</p>
          <div className='flex flex-col gap-4 relative'>
            <Blur className='absolute w-full h-full -z-10' />
            {plans.map((plan, index) => (
              <div
                key={index}
                onClick={() => handlePlanSelect(plan.name)}
                className={clsx(selectedPlan === plan.name ? 'border-[#004DE894] bg-[#00246b5e]' : 'border-[#004DE838] bg-[#00246B29] hover:bg-[#00246b5e] hover:border-[#004DE894]', 'border cursor-pointer rounded p-4 flex items-center justify-between relative transition-all duration-300')}>
                <div className='space-y-1'>
                  <p className='text-2xl font-gishaBold'>{formatCurrency(plan.price)} <span className='lowercase text-xs font-sans text-primary-100'>every {plan.name}</span></p>
                  <p className='text-sm text-accent'>{plan.description}</p>
                </div>
                {plan.deal &&
                  <div className='bg-primary/80 rounded px-2 py-1 h-max'>
                    <p className='text-sm font-medium'>Best Deal</p>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <Checkbox id='auto-renewal' checked={autoRenewal} onCheckedChange={toggleAutoRenewal} />
            <label htmlFor='auto-renewal' className='text-sm font-medium'>Enable auto-renewal for hassle-free access</label>
          </div>
          <p className='text-sm text-accent'>If enabled, you&apos;ll be asked to enter your card details during payment for automatic renewals</p>
        </div>
        <Button onClick={() => form.current?.requestSubmit()} variant='default' className='w-max mx-auto'>Subscribe to the Grind</Button>
      </div>
    </div>
  )
}
