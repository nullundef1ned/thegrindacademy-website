'use client';

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { IFAQ } from '@/app/_module/app.interfaces';

export default function FAQSection() {
  // const faqs = [
  //   {
  //     question: 'Is the program suitable for women?',
  //     answer: 'Absolutely! The Grind Academy welcomes students of all genders and is committed to providing an inclusive and supportive environment for everyone. Our programs are designed to empower every individual, regardless of gender, to achieve financial independence and success.'
  //   },
  //   {
  //     question: 'How quickly will I make my money back?',
  //     answer: 'While individual results can vary, many of our students report seeing a return on their investment within the first few months of completing the course. Our 30-day success guarantee is designed to help you start seeing results quickly.'
  //   },
  //   {
  //     question: 'Do I need money once I\'m inside The Grind Academy?',
  //     answer: 'No additional fees are required after your initial subscription. All course materials and access to mentorship are included in your subscription fee. Many students on admission fall in love with our AI CAMPUS and other business models which require no start up Money & saw great success.'
  //   },
  //   {
  //     question: 'Does my age really not matter?',
  //     answer: 'Absolutely not, although we do advise individuals below 18 to talk it over with a parent or guardian prior to enrolling in The Grind Academy. Rather than spending on the latest video games that lose their charm in no time, you have the chance to become part of our community, kickstart your own venture, and leave your friends and family in awe as you elevate your life in tangible ways.'
  //   },
  //   {
  //     question: 'I know nothing about the skills you teach. Is it a problem?',
  //     answer: 'Absolutely not. Remember, this is a mentorship program, designed for learning and growth. Simply adhere to our comprehensive lessons and expert advice, and you\'ll be on your way to establishing a lucrative venture.'
  //   },
  //   {
  //     question: 'I don\'t have a lot of time available, can I still join?',
  //     answer: 'Yes, you can! Our courses are designed to accommodate busy schedules, allowing you to learn at your own pace. While faster progress can be made with more time investment, even students with limited time can achieve substantial results by consistently dedicating as low as 30 minutes a day.'
  //   }
  // ]

  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<IFAQ[]>({
    queryKey: ['faqs'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/faq')).data
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
