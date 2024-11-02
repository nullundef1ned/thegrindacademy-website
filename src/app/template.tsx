'use client';

import React, { Fragment, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    </Fragment>
  )
}
