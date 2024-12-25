'use client';

import { IInfluencer } from '@/app/_module/app.interfaces';
import Blur from '@/components/Blur';
import Video from '@/components/Video';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react'

export default function InfluencerSection() {

  const axiosHandler = useAxios();

  const { data } = useQuery<IInfluencer>({
    queryKey: ['influencers'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/influencer')).data
    },
  })

  const influencer = data;

  if (!influencer) return null;

  return (
    <div className='root-section !py-10 space-y-10'>
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-4 w-full bg-[#0530851A] p-6 relative overflow-hidden">
        <Blur className='absolute w-2/3 h-2/3 top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-10' />
        <div className='space-y-4 lg:col-span-3'>
          <h3 className='text-4xl text-center lg:text-left font-gishaBold text-primary-100'>{influencer.title}</h3>
          <p className='text-white text-center lg:text-left'>{influencer.content}</p>
          <Image src="/images/influencer-arrow.svg" width={120} height={120} alt='Influencer arrow' className='mx-auto rotate-45 lg:rotate-0 lg:!ml-auto lg:mr-10' />
        </div>
        <div className='lg:col-span-4 relative'>
          <div className='absolute z-20 -top-1.5 -left-1.5 size-3 bg-[#353D50]' />
          <div className='absolute z-20 -top-1.5 -right-1.5 size-3 bg-[#353D50]' />
          <div className='absolute z-20 -bottom-1.5 -left-1.5 size-3 bg-[#353D50]' />
          <div className='absolute z-20 -bottom-1.5 -right-1.5 size-3 bg-[#353D50]' />
          <Video src={influencer.mediaUrl || ''} poster={influencer?.thumbnailUrl || ''} />
        </div>
      </div>
    </div>
  )
}
