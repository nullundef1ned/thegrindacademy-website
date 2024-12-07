import { Metadata } from 'next/types'
import React, { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'Subscription',
}

export default function SubscriptionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
