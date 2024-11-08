'use client';

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is Grind Academy?',
      answer: 'Grind Academy is an online learning platform that offers skill-building courses through a subscription-based model. We provide high-quality video and text-based courses, alongside access to exclusive Telegram channels for community support and engagement.'
    },
    {
      question: 'How does the subscription work?',
      answer: 'We offer flexible subscription plans to suit your needs: monthly, 3-month, and yearly. You can choose your preferred plan on our Subscriptions Page. While auto-renewals are available for convenience, they are off by default. We will never automatically bill you without your explicit consent and securely store your payment details.'
    },
    {
      question: 'What if I don\'t find a course helpful?',
      answer: 'We offer a money-back guarantee to ensure your satisfaction. If you are unhappy with a course, you are eligible for a refund according to our terms and conditions.'
    },
    {
      question: 'How can I contact Grind Academy for support?',
      answer: 'We have a dedicated Help Page with FAQs and a contact form for any queries or assistance you may need. Our team is committed to providing excellent support throughout your learning journey.'
    },
    {
      question: 'Is my personal information safe with Grind Academy?',
      answer: 'Absolutely! We prioritize the security and privacy of your data.We use robust security measures and encryption protocols to protect your personal information from unauthorized access.Your information is handled in strict compliance with our privacy policy.'
    }
  ]

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
          {faqs.map((faq, index) => (
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
