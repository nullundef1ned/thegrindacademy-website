'use client';

import React, { useRef, useState } from 'react'
import Blur from '@/components/Blur'
import useCurrency from '@/hooks/useCurrency';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { event } from 'nextjs-google-analytics';
import useAxios from '@/hooks/useAxios';
import { useMutation, useQuery } from '@tanstack/react-query';
import pluralize from 'pluralize';
import { ISubscriptionRequest, ISubscriptionPlan } from './_module/subscription.interface';
import LoadingIcons from 'react-loading-icons';

export default function SubscriptionPage({ searchParams }: { searchParams: { "enrollment-course": string } }) {

  const axiosHandler = useAxios();

  const { data, isLoading, error, refetch } = useQuery<ISubscriptionPlan[]>({
    queryKey: ['subscription-plans'],
    queryFn: async () => {
      return (await axiosHandler.get('website-content/subscription/plan')).data
    },
  })

  const { mutate: createSubscription, isPending: createSubscriptionLoading, error: createSubscriptionError, isSuccess: createSubscriptionSuccess } = useMutation({
    mutationFn: async (data: ISubscriptionRequest) => {
      return (await axiosHandler.post('student/register', data)).data
    },
    onSuccess: (data) => {
      window.open(data, '_blank');
    }
  })

  const { formatCurrency } = useCurrency();

  const form = useRef<HTMLFormElement>(null);

  const [autoRenewal, setAutoRenewal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    const planName = data?.find(p => p.id === plan)?.name;
    event('subscription_plan_selected', { category: "Plan", label: planName });
  }

  const toggleAutoRenewal = () => {
    setAutoRenewal(!autoRenewal);
    event('subscription_auto_renewal_toggled', { category: "Auto Renewal", label: autoRenewal ? "Enabled" : "Disabled" });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subscriptionPlanId = Number(selectedPlan);
    if (!form.current || !subscriptionPlanId) return;

    const formData = new FormData(form.current);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const telegramUserName = formData.get('telegramUserName') as string;
    const referralCode = formData.get('referralCode') as string;

    const payload: ISubscriptionRequest = {
      firstName,
      lastName,
      email,
      telegramUserName,
      referralCode,
      subscriptionPlanId,
      autoRenewal,
      courseSlug: searchParams['enrollment-course'],
    }

    createSubscription(payload);
  }

  const generateFrequency = (plan: ISubscriptionPlan) => {
    return `${plan.duration == 1 ? '' : plan.duration} ${pluralize(plan.frequency, plan.duration)}`
  }

  const plans = data || [];

  if (error) {
    return <div className='root-section !py-10 space-y-4 flex flex-col items-center justify-center h-[70dvh]' data-aos='fade-up'>
      <p className='text-2xl font-gishaBold text-center'>Uh oh!</p>
      <p className='text-lg text-center'>Plans are not loading for some reason</p>
      <Button size="sm" onClick={() => refetch()}>Reload</Button>
    </div>
  }

  if (plans.length === 0 && !isLoading) {
    return <div className='root-section !py-10 space-y-4 flex flex-col items-center justify-center h-[70dvh]' data-aos='fade-up'>
      <p className='text-2xl font-gishaBold text-center'>Registration is currently closed</p>
      <p className='text-lg text-center'>Please check back soon</p>
    </div>
  }

  if (createSubscriptionSuccess) {
    return <div className='root-section !py-10 space-y-10 flex flex-col items-center justify-center h-[70dvh]' data-aos='fade-up'>
      <p className='text-2xl font-gishaBold text-center'>Success!</p>
      <p className='text-lg text-center'>You will be redirected to the payment page shortly</p>
    </div>
  }

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center' data-aos='fade-up'>
      <div className='w-full md:w-2/3 lg:w-1/3 flex flex-col space-y-10'>
        <div className='space-y-2 flex flex-col items-center'>
          <p className='text-2xl font-gishaBold text-center'>Get started on your journey</p>
          <p className='text-base text-accent text-center'>Fill in the information needed below and select a plan to start Grinding</p>
        </div>

        <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-4 w-full relative'>
          <Blur className='absolute w-full h-full -z-10' />
          <div className='grid grid-cols-2 gap-4'>
            <Input type='text' required name='firstName' icon='ri:user-6-fill' placeholder='First Name' />
            <Input type='text' required name='lastName' icon='ri:user-6-fill' placeholder='Last Name' />
          </div>
          <Input type='email' required name='email' icon='ri:mail-fill' placeholder='Email Address' />
          <div className='relative space-y-1.5'>
            <Input type='text' required pattern='^@[a-zA-Z0-9_]+$' name='telegramUserName' icon='ri:telegram-fill' placeholder='Telegram Username' />
            <p className='text-xs text-accent'>Enter your telegram username beginning with the @</p>
          </div>
          <Input type='text' name='referralCode' icon='ri:share-fill' placeholder='Referal code' />
        </form>

        <div className='flex flex-col gap-4 w-full'>
          <p className='font-gishaBold text-3xl text-center'>Select a plan</p>
          <div className='flex flex-col gap-4 relative'>
            <Blur className='absolute w-full h-full -z-10' />
            {plans.map((plan, index) => (
              <div
                key={index}
                onClick={() => handlePlanSelect(plan.id)}
                className={clsx(selectedPlan === plan.id ? 'border-[#004DE894] bg-[#00246b5e]' : 'border-[#004DE838] bg-[#00246B29] hover:bg-[#00246b5e] hover:border-[#004DE894]', 'border cursor-pointer rounded p-4 flex items-center justify-between relative transition-all duration-300')}>
                <div className='space-y-1'>
                  <p className='text-2xl font-gishaBold'>{formatCurrency(plan.price)} <span className='lowercase text-xs font-sans text-primary-100'>every {generateFrequency(plan)}</span></p>
                  {/* <p className='text-sm text-accent'>{plan.description}</p> */}
                </div>
                <div className='flex items-center gap-4'>
                  {plan.isDeal &&
                    <div className='bg-primary/80 rounded px-2 py-1 h-max'>
                      <p className='text-[10px] font-medium whitespace-nowrap'>Best Deal</p>
                    </div>
                  }
                  <Checkbox id={`${plan.name}-checkbox`} className='rounded-full' checked={selectedPlan === plan.id} />
                </div>
              </div>
            ))}
            {(isLoading && plans.length === 0) &&
              <div className='w-full h-[30vh] flex items-center justify-center'>
                <LoadingIcons.TailSpin stroke="#004DE8" />
              </div>
            }
          </div>
        </div>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <Checkbox id='auto-renewal' checked={autoRenewal} onCheckedChange={toggleAutoRenewal} />
            <label htmlFor='auto-renewal' className='text-sm font-medium'>Enable auto-renewal for hassle-free access</label>
          </div>
          <p className='text-sm text-accent'>If enabled, you&apos;ll be asked to enter your card details during payment for automatic renewals</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Button disabled={!selectedPlan} loading={createSubscriptionLoading} onClick={() => form.current?.requestSubmit()} variant='default' className='w-max mx-auto'>Subscribe to the Grind</Button>
          {createSubscriptionError && <p className='text-sm text-destructive text-center'>{createSubscriptionError.message}</p>}
        </div>
      </div>
    </div>
  )
}
