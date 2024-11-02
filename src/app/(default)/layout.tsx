import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer';

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className='relative w-screen overflow-x-hidden'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
