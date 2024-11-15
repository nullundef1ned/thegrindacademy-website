'use client';

import React, { Fragment, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hotjar from '@hotjar/browser';

import { GoogleAnalytics } from 'nextjs-google-analytics';

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
      {children}
      <GoogleAnalytics trackPageViews />
    </Fragment>
  )
}
