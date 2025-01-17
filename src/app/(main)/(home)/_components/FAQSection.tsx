'use client';

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { IFAQ } from '@/app/_module/app.interfaces';

export default function FAQSection() {

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<IFAQ[]>({
    queryKey: ['faqs'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/faq', { params: { type: 'general' } })).data
    },
  })

  const faqs = data || [];
  const faqsLoaded = faqs.length > 0 && !isLoading && !error;

  if (!faqsLoaded) return null;

  return (
    <div id='faqs' className='root-section !py-10 space-y-10 flex flex-col items-center'>
      <div className='relative flex flex-col items-center'>
        <div className='space-y-4 md:w-3/4'>
          <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
            FAQ&apos;s
          </h2>
        </div>
      </div>
      <div className='w-full  md:w-8/12 mx-auto space-y-4'>
        <Accordion type='single' collapsible className='space-y-4'>
          {faqsLoaded && faqs.map((faq: IFAQ, index: number) => (
            <AccordionItem key={index} value={index.toString()} className='bg-[#00246B14] border border-[#548DFF24] rounded px-4'>
              <AccordionTrigger className='!no-underline'>
                <p className='text-lg font-gishaBold text-left'>{faq.question}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-muted'>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
