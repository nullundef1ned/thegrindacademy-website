import BrandBars from "@/components/BrandBars";
import IconifyIcon from "@/components/IconifyIcon";
import { Button } from "@/components/ui/button";
import environmentUtil from "@/utils/env.util";
import Image from "next/image";
import { Fragment } from "react";
import AffiliateFAQSection from "./_components/AffiliateFAQSection";

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

  const whyJoinUs = [
    {
      icon: 'game-icons:take-my-money',
      title: 'Earn Generously',
      description: 'Benefit from one of the most rewarding commission structures in the industry, with rates ranging from 33% to an impressive 50%.',
    },
    {
      icon: 'game-icons:mesh-network',
      title: 'Expand Your Network',
      description: 'Help others skill up and build their capabilities while you enhance your own network and reputation.',
    },
    {
      icon: 'fluent:people-community-20-filled',
      title: 'Support and Mentorship',
      description: 'Gain access to our comprehensive resources and dedicated support. New to affiliate marketing? Our Sell Like A Pro (S.L.A.P) program is designed to guide you every step of the way.',
    },
  ]

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
      <div className='root-section !py-10 lg:h-[75vh] relative'>
        <BrandBars containerClassName="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 animate-pulse" />
        <div className="w-full h-full p-8 grid grid-cols-1 lg:grid-cols-7 gap-4 place-items-center radial-gradient from-[#0E121F73] to-[#00246B19] border border-[#B0CAFF0D] z-20">
          <div className="col-span-1 lg:col-span-4 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-gishaBold" data-aos='fade-right'>Become a Partner in Success: Join Our Affiliate Program</h1>
            <p className=" text-accent text-sm" data-aos='fade-right' data-aos-delay={100}>
              Earn Up to 50% Commission on every referral
            </p>
            <p className=" text-muted text-lg" data-aos='fade-right' data-aos-delay={200}>
              Join The Grind Academy&apos;s affiliate program and start earning a substantial income by helping others achieve their dreams. As our affiliate, you&apos;re not just promoting courses; you&apos;re empowering individuals to skill up and reach their full potential. Whether you&apos;re a seasoned marketer or just starting out, we have a place for you.
            </p>
            <Button className="w-max" data-aos='fade-right' data-aos-delay={300} href={`${environmentUtil.DASHBOARD_URL}/affiliate/register`}>Start Today</Button>
          </div>
        </div>
      </div>
      <div className="root-section !py-10 space-y-10">
        <h2 className='text-4xl lg:text-5xl text-center font-gishaBold' data-aos='fade-up'>
          Why Join <span className='text-primary-200'>Us?</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {whyJoinUs.map((item, index) => (
            <div key={index} className="space-y-2 p-4">
              <div className="flex items-center gap-3">
                <IconifyIcon icon={item.icon} size={40} className="text-primary-100" />
                <h3 className="text-xl font-gishaBold">{item.title}</h3>
              </div>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
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
          <Button className="w-max" data-aos='fade-right' data-aos-delay={400} href={`${environmentUtil.DASHBOARD_URL}/affiliate/register`}>Get Started</Button>
        </div>
        <div className="hidden lg:block lg:col-span-3 border border-[#B0CAFF0D] p-4 rounded radial-gradient from-[#0E121F73] to-[#00246B19]">
          <div className="w-full h-full relative">
            <Image src={'/images/default-thumbnail.jpg'} alt="Affiliate Program" fill className="object-cover absolute w-full h-full" />
          </div>
        </div>

      </div>
      <div className="root-section !py-10 space-y-10">
        <h2 className='text-3xl lg:text-4xl text-center font-gishaBold' data-aos='fade-up'>
          You have <span className='text-primary-200'>two</span> options
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 p-6 flex flex-col justify-between border rounded-md" data-aos='fade-right'>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between">
                <h3 className="text-2xl font-gishaBold text-muted">For the <span className="text-primary-200">Pros</span></h3>
                <IconifyIcon icon="mdi:professional-hexagon" size={32} className="text-primary-200" />
              </div>
              <p className="text-sm">
                Are you an experienced affiliate marketer looking for a high-yield opportunity? We offer a generous <span className="text-primary-200">33% commission</span> on our proven product—no commitment fees, just profit. Sign up now, access your dashboard immediately, and start earning today.
              </p>
            </div>
            <Button className="w-max" href={`${environmentUtil.DASHBOARD_URL}/affiliate/register`} size={"sm"}>Start earning</Button>
          </div>
          <div className="space-y-6 p-6 flex flex-col justify-between border rounded-md" data-aos='fade-right' data-aos-delay={100}>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between">
                <h3 className="text-2xl font-gishaBold text-muted">For the <span className="text-primary-200">Newcomers</span></h3>
                <IconifyIcon icon="fluent:new-24-filled" size={32} className="text-primary-200" />
              </div>
              <p className="text-sm">
                New to affiliate marketing? No problem! At TheGrindAcademy, we see potential in everyone. Join our <span className="text-primary-200">Sell Like A Pro (S.L.A.P)</span> program, designed to teach you everything from scratch. Not only will you receive expert mentorship, but you&apos;ll also earn an exceptional <span className="text-primary-200">50% commission</span> on each referral as a member of our community. Start your journey with us and unlock your earning potential.
              </p>
            </div>
            <Button className="w-max" href="/subscription" size={"sm"}>Start your journey</Button>
          </div>
        </div>
      </div>
      <AffiliateFAQSection />
    </Fragment>
  )
}

