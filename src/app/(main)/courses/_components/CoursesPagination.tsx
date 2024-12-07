'use client';

import clsx from 'clsx';

import { ICourse, IPagination } from "@/app/_module/app.interfaces";
import React, { Fragment } from "react";
import IconifyIcon from '@/components/IconifyIcon';
import { useRouter } from 'next/navigation';

export default function CoursesPagination({ data }: { data: IPagination<ICourse> }) {

  const router = useRouter();
  const canGoNext = data.nextPage !== null;
  const canGoPrev = data.previousPage !== null;

  const paginationStyle = 'size-10 grid place-items-center border rounded-full';
  const disabledPaginationStyle = 'bg-[#00246B26] border-[#E6EEFF1A] cursor-not-allowed';
  const enabledPaginationStyle = 'bg-[#0247CE40] border-[#E6EEFF1A] cursor-pointer';


  const goToNextPage = () => {
    if (!data.nextPage) return;
    router.push(`/courses?page=${data.nextPage}`);
  }

  const goToPrevPage = () => {
    if (!data.previousPage) return;
    router.push(`/courses?page=${data.previousPage}`);
  }

  if (data.totalPages <= 1) return null;

  return (
    <Fragment>
      <div className='w-full flex justify-center space-x-4'>
        <div onClick={goToPrevPage} className={clsx(canGoPrev ? enabledPaginationStyle : disabledPaginationStyle, paginationStyle)}>
          <IconifyIcon icon='ri:arrow-left-s-line' size={16} className={clsx(!canGoPrev && 'opacity-40', 'flex items-center')} />
        </div>
        <div onClick={goToNextPage} className={clsx(canGoNext ? enabledPaginationStyle : disabledPaginationStyle, paginationStyle)}>
          <IconifyIcon icon='ri:arrow-right-s-line' size={16} className={clsx(!canGoNext && 'opacity-40', 'flex items-center')} />
        </div>
      </div>
    </Fragment>
  )
}
