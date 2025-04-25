'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react'
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
import Image from 'next/image';
import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';

export default function SubscriptionPage({ searchParams }: { searchParams: { "enrollment-course": string } }) {

  const axiosHandler = useAxios();

  const form = useRef<HTMLFormElement>(null);

  const [autoRenewal, setAutoRenewal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  const { formatCurrency } = useCurrency();

  const { data, isLoading, isRefetching, error, refetch } = useQuery<ISubscriptionPlan[]>({
    queryKey: ['subscription-plans'],
    queryFn: async () => {
      return (await axiosHandler.get('website-content/subscription/plan')).data
    },
  })

  const createSubscriptionMutation = useMutation({
    mutationFn: async (data: ISubscriptionRequest) => {
      return (await axiosHandler.post('student/register', data)).data
    },
    onSuccess: (data) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      localStorage.removeItem('referral');
      window.open(data, '_blank');
      setTimeout(() => {
        setPaymentLink(data);
      }, 1000);
    }
  })

  const checkReferralCodeMutation = useMutation({
    mutationFn: async (code: string) => {
      return (await axiosHandler.get(`/website-content/referral/${code}`)).data
    },
  })

  const validateTelegramUsernameMutation = useMutation({
    mutationFn: async (username: string) => {
      return (await axiosHandler.get(`/website-content/telegram/${username}`)).data
    },
  })

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
    const planName = data?.find(p => p.id === plan)?.name;
    event('subscription_plan_selected', { category: "Plan", label: planName });
  }

  const toggleAutoRenewal = () => {
    setAutoRenewal(!autoRenewal);
    event('subscription_auto_renewal_toggled', { category: "Auto Renewal", label: autoRenewal ? "Enabled" : "Disabled" });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    if (referralCode) {
      const referralCodeResponse = await checkReferralCodeMutation.mutateAsync(referralCode);
      if (!referralCodeResponse) return alert('Invalid referral code');
    }

    if (telegramUserName) {
      const telegramUsernameResponse = await validateTelegramUsernameMutation.mutateAsync(telegramUserName);
      if (telegramUsernameResponse) return alert('Telegram username already taken');
    }

    createSubscriptionMutation.mutate(payload);
  }

  const generateFrequency = (plan: ISubscriptionPlan) => {
    return `${plan.duration == 1 ? '' : plan.duration} ${pluralize(plan.frequency, plan.duration)}`
  }

  const handleReferralCodeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const code = e.target.value;
    if (!code) return;
    checkReferralCodeMutation.mutate(code);
  }

  // Commented out for now because client requested to remove it
  // const handleTelegramUsernameChange = (e: React.FocusEvent<HTMLInputElement>) => {
  //   validateTelegramUsernameMutation.reset();
  //   const username = e.target.value;
  //   if (!username) return;
  //   validateTelegramUsernameMutation.mutate(username);
  // }

  const plans = data || [];
  const disabled = !selectedPlan || validateTelegramUsernameMutation.data

  useEffect(() => {
    const referralCode = localStorage.getItem('referral');

    if (referralCode) {
      document.getElementsByName('referralCode')[0]?.setAttribute('value', referralCode);
      checkReferralCodeMutation.mutate(referralCode);
    }
  }, []);

  if (error) {
    return (
      <div className='root-section !py-10 gap-6 flex flex-col items-center justify-center h-[70dvh]'>
        <Image src='/images/empty-folder.svg' alt='Error' width={100} height={100} />
        <div className='space-y-2'>
          <p className='text-2xl font-gishaBold text-center'>Oops! Something went wrong</p>
          <p className='font-light text-center'>We couldn&apos;t load the subscription plans at the moment</p>
        </div>
        <Button size="sm" variant='secondary' loading={isRefetching} onClick={() => refetch()}>Reload Plans</Button>
      </div>
    )
  }

  if (plans.length === 0 && !isLoading) {
    return (
      <div className='root-section !max-w-md !py-10 gap-10 flex flex-col items-center justify-center h-[70dvh]'>
        <Image src='/images/registration-closed.svg' alt='Error' width={100} height={100} />

        <div className='space-y-2'>
          <p className='text-2xl font-gishaBold text-center'>Registration closed</p>
          <p className='text-center font-light'>🚧 We&apos;re currently not accepting new subscriptions</p>
        </div>
        <hr className='border-primary-100/10 w-full' />
        <div className='space-y-4 max-w-sm flex flex-col items-center'>
          <p className='text-center font-light'>Thank you for your interest in joining us! Our subscription plans are temporarily unavailable as registration is closed.</p>
          <Button size="sm" variant='secondary' href='/'>Go To Homepage</Button>
        </div>
      </div>
    )
  }

  if (createSubscriptionMutation.isSuccess) {
    return (
      <div className='root-section !max-w-md !py-10 gap-6 flex flex-col items-center justify-center h-max mt-40 border border-[#B0CAFF1A]'>
        <Image src='/images/account-creation.svg' alt='Error' width={100} height={100} />
        <p className='text-xl font-gishaBold text-center'>Account Created Successfully 🎉 </p>
        <p className='text-center font-light'>You&apos;re now one step closer to transforming your skills and achieving your goals.
          You&apos;re being redirected to complete your subscription payment</p>
        {paymentLink &&
          <Link href={paymentLink} className='text-sm text-accent'>If you are not redirected, <span className='font-medium text-primary-100'>click here</span></Link>
        }
      </div>
    )
  }

  return (
    <div className='root-section !py-10 space-y-10 flex flex-col items-center'>
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
          {/* <div className='relative space-y-1.5'>
            <Input type='text' pattern='^@[a-zA-Z0-9_]+$' name='telegramUserName' onBlur={handleTelegramUsernameChange} icon='ri:telegram-fill' placeholder='Telegram Username' />
            <p className='text-xs text-accent'>Enter your telegram username beginning with the @</p>
            <div className='flex items-center gap-2'>
              {!validateTelegramUsernameMutation.data && validateTelegramUsernameMutation.isSuccess ?
                <Fragment>
                  <IconifyIcon icon="ri:check-fill" className='text-green-500 flex items-center' />
                  <p className='text-xs text-accent'>Telegram username verified</p>
                </Fragment>
                :
                <Fragment>
                  {validateTelegramUsernameMutation.isPending ?
                    <Fragment>
                      <LoadingIcons.TailSpin strokeWidth={2} height={15} width={15} />
                      <p className='text-xs text-accent'>Verifying your telegram username</p>
                    </Fragment>
                    :
                    <Fragment>
                      {validateTelegramUsernameMutation.data && validateTelegramUsernameMutation.isSuccess &&
                        <Fragment>
                          <IconifyIcon icon="ri:close-fill" className='text-destructive flex items-center' />
                          <p className='text-xs text-destructive'>This username is already taken. Please try a different one</p>
                        </Fragment>
                      }
                    </Fragment>
                  }
                </Fragment>
              }
            </div>
          </div> */}
          <div className='flex flex-col gap-2'>
            <Input type='text' name='referralCode' icon='ri:share-fill' placeholder='Referal code' onBlur={handleReferralCodeChange} />
            <div className='flex items-center gap-2'>
              {checkReferralCodeMutation.data &&
                <Fragment>
                  <IconifyIcon icon="ri:check-fill" className='text-green-500 flex items-center' />
                  <p className='text-xs text-accent'>Referal code verified</p>
                </Fragment>
              }
              {checkReferralCodeMutation.isPending &&
                <Fragment>
                  <LoadingIcons.TailSpin strokeWidth={2} height={15} width={15} />
                  <p className='text-xs text-accent'>Verifying your referral code</p>
                </Fragment>
              }
              {!checkReferralCodeMutation.data && checkReferralCodeMutation.isSuccess &&
                <Fragment>
                  <IconifyIcon icon="ri:close-fill" className='text-destructive flex items-center' />
                  <p className='text-xs text-destructive'>Invalid referral code. Please check your code and try again</p>
                </Fragment>
              }
            </div>
          </div>
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
                  {plan.upSellPrice && <p className='text-primary-100 text-sm line-through'>{formatCurrency(plan.upSellPrice)}</p>}
                  <p className='text-2xl font-gishaBold'>{formatCurrency(plan.price)} <span className='lowercase text-xs font-sans text-primary-100'>every {generateFrequency(plan)}</span></p>
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
          <Button disabled={disabled} loading={createSubscriptionMutation.isPending} onClick={() => form.current?.requestSubmit()} variant='default' className='w-max mx-auto'>Subscribe to the Grind</Button>
          {createSubscriptionMutation.error && <p className='text-sm text-destructive text-center'>{createSubscriptionMutation.error.message}</p>}
        </div>
      </div>
    </div>
  )
}
