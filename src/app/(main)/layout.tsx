import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import Preloader from './_components/Preloader';
import WhatsAppButton from './_components/WhatsAppButton';

type DefaultLayoutProps = {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className='relative w-screen overflow-x-clip'>
      <WhatsAppButton />
      <Header />
      <div className='relative min-h-screen space-y-4'>
        {children}
      </div>
      <Footer />
      <Preloader />
    </main>
  )
}