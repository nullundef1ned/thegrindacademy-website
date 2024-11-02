import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer';

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className='w-screen min-h-screen overflow-x-hidden relative'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
