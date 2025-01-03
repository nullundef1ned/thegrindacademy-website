import BrandBars from "@/components/BrandBars";
import { Button } from "@/components/ui/button";
import environmentUtil from "@/utils/env.util";
import Image from "next/image";
import { Fragment } from "react";

export const metadata = {
  alternates: {
    canonical: '/affiliate-program',
  },
  title: 'Affiliate Program',
  description: 'Affiliate Program',
  openGraph: {
    title: 'Affiliate Program',
    description: 'Affiliate Program',
  },
  twitter: {
    title: 'Affiliate Program',
    description: 'Affiliate Program',
  },
}

export default async function AffiliateProgramPage() {
  const steps = [
    {
      title: 'Create an affiliate account',
      description: 'Sign up for our affiliate program and get access to our affiliate dashboard.',
    },
    {
      title: 'Promote our content',
      description: 'Share your custom links on your podcasts, blogs, social media, emails and events. You will know when the time is right.',
    },
    {
      title: 'Earn a commission',
      description: 'If anyone subscribes using your link, you will get paid. Its that simple.',
    },
  ]

  return (
    <Fragment>
      <div className='root-section !py-10 lg:h-[60vh] relative'>
        <BrandBars containerClassName="absolute top-1/2 right-0 -translate-y-1/2 w-1/3" />
        <div className="w-full h-full p-8 grid grid-cols-1 lg:grid-cols-7 gap-4 place-items-center radial-gradient from-[#0E121F73] to-[#00246B19] border border-[#B0CAFF0D] z-20">
          <div className="col-span-1 lg:col-span-4 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-gishaBold" data-aos='fade-right'>Become an Affiliate</h1>
            <p className=" text-accent text-sm" data-aos='fade-right' data-aos-delay={100}>
              Join our affiliate program and earn 20% of every sale you refer to us.
            </p>
            <p className=" text-muted text-lg" data-aos='fade-right' data-aos-delay={200}>
              We&apos;re on a mission to help people achieve their goals. And it all starts with skilling up.
              Help others start building their skills while expanding your network.
            </p>
            <Button data-aos='fade-right' data-aos-delay={300} href={`${environmentUtil.DASHBOARD_URL}/affiliate/signup`}>Start Today</Button>
          </div>
        </div>
      </div>
      <div className='root-section !py-10 grid grid-cols-1 lg:grid-cols-7 gap-10'>
        <div className="space-y-6 col-span-1 lg:col-span-4">
          <div className="space-y-2">
            <p className="text-sm text-primary-200">How it works</p>
            <h2 className="text-4xl font-gishaBold">Help people build.</h2>
            <h2 className="text-4xl font-gishaBold">Get paid.</h2>
          </div>
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start" data-aos='fade-right' data-aos-delay={index * 100}>
                <div className="flex gap-4 items-start">
                  <div className="size-10 flex-shrink-0 bg-[#00246B]/50 rounded grid place-items-center">
                    <p className="text-sm font-medium text-primary-200">{index + 1}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-gishaBold">{step.title}</h3>
                    <p className="text-accent">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button data-aos='fade-right' data-aos-delay={400} href={`${environmentUtil.DASHBOARD_URL}/affiliate/signup`}>Get Started</Button>
        </div>
        <div className="hidden lg:block lg:col-span-3 border border-[#B0CAFF0D] p-4 rounded radial-gradient from-[#0E121F73] to-[#00246B19]">
          <div className="w-full h-full relative">
            <Image src={'/images/default-thumbnail.jpg'} alt="Affiliate Program" fill className="object-cover absolute w-full h-full" />
          </div>
        </div>

      </div>
    </Fragment>
  )
}
