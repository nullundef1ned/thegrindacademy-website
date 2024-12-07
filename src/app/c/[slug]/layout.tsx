import Footer from '@/components/Footer'
import { Metadata } from 'next/types'
import React from 'react'
import { Course } from './_/course.interface'

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course: Course = {
    slug: 'advanced-javascript-fundamentals',
    title: 'Advanced JavaScript Fundamentals',
    shortDescription: 'Master modern JavaScript concepts and best practices',
    description: 'Dive deep into JavaScript with this comprehensive course covering ES6+, async programming, closures, and more. Perfect for developers looking to level up their JavaScript skills.',
    thumbnail: 'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: 100,
    introVideo: 'https://www.youtube.com/watch?v=example',
    images: [
      'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1639815188508-13f7370f664a?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    lessons: [
      {
        title: 'Introduction to Modern JavaScript',
        description: 'Learn about the evolution of JavaScript and set up your development environment',
        duration: 45,
      },
      {
        title: 'ES6+ Features Deep Dive',
        description: 'Explore arrow functions, destructuring, spread operator and other ES6+ features',
        duration: 60,
      },
      {
        title: 'Asynchronous Programming',
        description: 'Master promises, async/await, and handling asynchronous operations',
        duration: 75,
      },
      {
        title: 'Closures and Scope',
        description: 'Understanding lexical scope, closures, and practical applications',
        duration: 55,
      }
    ],
  }

  return {
    metadataBase: new URL(`https://thegrindacademy.co/c/${params.slug}`),
    title: `${course.title} | The Grind Academy`,
    description: course.shortDescription,
    keywords: course.title,
    authors: {
      name: 'The Grind Academy',
      url: 'https://thegrindacademy.co',
    },
    openGraph: {
      title: `${course.title} | The Grind Academy`,
      description: course.shortDescription,
      images: [course.thumbnail],
    },
    twitter: {
      title: `${course.title} | The Grind Academy`,
      description: course.shortDescription,
      images: [course.thumbnail],
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
