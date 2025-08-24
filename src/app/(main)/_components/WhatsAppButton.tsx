"use client";

import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="http://wa.me/2349072661338?text=I have some questions about the grind" target='_blank'>
        <div className="size-12 min-w-12 w-max rounded-full group grid place-items-center bg-gradient-to-tr from-[rgba(33,50,101,0.8)] to-[rgba(19,28,55,0.67)]">
          <div className="flex items-center gap-2 px-4 overflow-hidden">
            <IconifyIcon icon="formkit:whatsapp" className='flex items-center' size={20} />
            <p className='text-white text-sm md:group-hover:ml-0 -ml-44 opacity-0 md:group-hover:opacity-100 transition-all duration-700'>Message us on WhatsApp</p>
          </div>
        </div>
      </Link>
    </div>
  );
} 