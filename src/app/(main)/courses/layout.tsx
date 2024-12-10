import { Metadata } from 'next/types'
import React, { Fragment } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: '/courses',
  },
  title: 'Courses',
  description: 'Courses at The Grind Academy',
  openGraph: {
    title: 'Courses',
    description: 'Courses at The Grind Academy',
  },
  twitter: {
    title: 'Courses',
    description: 'Courses at The Grind Academy',
  },
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
