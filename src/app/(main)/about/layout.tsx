import { Metadata } from 'next/types'
import React, { Fragment } from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About The Grind Academy',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
