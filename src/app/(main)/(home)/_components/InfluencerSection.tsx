'use client';

import { IInfluencer } from '@/app/_module/app.interfaces';
import useAxios from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function InfluencerSection() {


  const axiosHandler = useAxios();

  const { data, isLoading, error } = useQuery<IInfluencer>({
    queryKey: ['influencers'],
    queryFn: async () => {
      return (await axiosHandler.get('/website-content/influencer')).data
    },
  })

  const influencer = data;
  const influencerLoaded = influencer && !isLoading && !error;

  if (!influencerLoaded) return null;

  return (
    <div className='root-section !py-10 space-y-10'>InfluencerSection</div>
  )
}
