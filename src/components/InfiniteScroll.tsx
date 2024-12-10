import React from 'react'
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Image from 'next/image';

interface IInfiniteScrollProps<T> {
  items: T[] | string[];
  imageKey?: keyof T;
  height?: string;
  initialDelay: number;
}

export default function InfiniteScroll<T>({ items, imageKey, height = '450px', initialDelay }: IInfiniteScrollProps<T>) {
  return (
    <motion.div
      style={{ height }}
      className="flex gap-4 w-full overflow-hidden cursor-pointer"
    >
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            data-aos='fade-right'
            data-aos-delay={initialDelay + ((index + 1) * 200)}
            className={clsx(index % 3 == 0 && 'md:row-span-2', 'flex-shrink-0 w-[450px] relative p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
            <div className='relative w-full h-full'>
              <Image src={(imageKey && typeof item === 'object' && item !== null) ? item[imageKey] as string : item as string} alt={`${index}-image`} fill className='object-cover' />
            </div>
          </div>
        ))}
        {/* Duplicate items for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className={clsx(index % 3 == 0 && 'md:row-span-2', 'flex-shrink-0 w-[400px] relative p-3 border border-primary/10 rounded overflow-hidden bg-primary/10')}>
            <div className='relative w-full h-full'>
              <Image src={(imageKey && typeof item === 'object' && item !== null) ? item[imageKey] as string : item as string} alt={`${index}-image`} fill className='object-cover' />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
