'use client';

import React, { Fragment, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hotjar from '@hotjar/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GoogleAnalytics } from 'nextjs-google-analytics';

export const queryClient = new QueryClient();

export default function RootTemplate({ children }: { children: React.ReactNode }) {

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
