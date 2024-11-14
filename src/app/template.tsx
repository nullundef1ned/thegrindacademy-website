'use client';

import React, { Fragment, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function RootTemplate({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, [])

  return (
    <Fragment>
      {children}
      <GoogleAnalytics trackPageViews />
    </Fragment>
  )
}
