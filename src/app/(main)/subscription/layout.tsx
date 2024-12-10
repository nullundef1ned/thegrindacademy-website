import { Metadata } from 'next/types'
import React, { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'Subscription',
  description: 'Get started on your journey to success with The Grind Academy.',
  openGraph: {
    title: 'Subscription',
    description: 'Get started on your journey to success with The Grind Academy.',
  },
  twitter: {
    title: 'Subscription',
    description: 'Get started on your journey to success with The Grind Academy.',
  },
}

export default function SubscriptionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
