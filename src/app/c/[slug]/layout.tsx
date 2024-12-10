import Footer from '@/components/Footer'
import { Metadata } from 'next/types'
import React from 'react'
import { ICourse } from '@/app/_module/app.interfaces'
import environmentUtil from '@/utils/env.util';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

  const response = await fetch(`${environmentUtil.API_URL}/website-content/course/${params.slug}`, {
    cache: 'no-store',
  });

  const status = response.status;

  if (status !== 200) {
    return {
      metadataBase: new URL(`https://thegrindacademy.co/c/${params.slug}`),
      title: 'Course Not Found',
      description: 'Course Not Found',
    }
  }

  const course = (await response.json()).data as ICourse;

  return {
    metadataBase: new URL(`https://thegrindacademy.co/c/${params.slug}`),
    title: `${course.name} | The Grind Academy`,
    description: course.shortDescription,
    keywords: course.name,
    authors: {
      name: 'The Grind Academy',
      url: 'https://thegrindacademy.co',
    },
    openGraph: {
      title: `${course.name} | The Grind Academy`,
      description: course.shortDescription,
      images: course.media.imageUrls,
    },
    twitter: {
      title: `${course.name} | The Grind Academy`,
      description: course.shortDescription,
      images: course.media.imageUrls,
    },
  }
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='bg-background'>
      <div className='min-h-screen relative'>
        {children}
      </div>
      <Footer />
    </main>
  )
}
