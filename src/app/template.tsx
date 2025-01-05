'use client';

import React, { Fragment, Suspense, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hotjar from '@hotjar/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import useURL from '@/hooks/useURL';
import useAxios from '@/hooks/useAxios';

export const queryClient = new QueryClient();

function RootTemplate({ children }: { children: React.ReactNode }) {

  const axiosHandler = useAxios();
  const { searchParams } = useURL();
  const referralCode = searchParams?.get('referral') as string;


  useEffect(() => {
    const logReferralVisit = async (code: string) => {
      await axiosHandler.post(`/website-content/referral/${code}/visit`)
    }

    if (referralCode) {
      localStorage.setItem('referral', referralCode);
      logReferralVisit(referralCode);
    }
  }, [referralCode, axiosHandler]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    const siteId = Number(process.env.NEXT_PUBLIC_HOTJAR_SITE_ID!);
    const hotjarVersion = Number(process.env.NEXT_PUBLIC_HOTJAR_VERSION!);

    Hotjar.init(siteId, hotjarVersion);
  }, [])

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <GoogleAnalytics trackPageViews />
    </Fragment>
  )
}


export default function SuspenseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <RootTemplate>
        {children}
      </RootTemplate>
    </Suspense>
  )
}
