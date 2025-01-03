import { IPrivacyPolicy } from "@/app/_module/app.interfaces";
import environmentUtil from "@/utils/env.util";
import helperUtil from "@/utils/helper.util";
import { Fragment } from "react";

export const metadata = {
  alternates: {
    canonical: '/referral-policy',
  },
  title: 'Referral and Affiliate Policy',
  description: 'Referral and Affiliate Policy',
  openGraph: {
    title: 'Referral and Affiliate Policy',
    description: 'Referral and Affiliate Policy',
  },
  twitter: {
    title: 'Referral and Affiliate Policy',
    description: 'Referral and Affiliate Policy',
  },
}

export default async function ReferralPolicyPage() {

  const response = await fetch(`${environmentUtil.API_URL}/website-content/referral-policy`, {
    cache: 'no-store'
  });
  const data = (await response.json()).data as IPrivacyPolicy;

  const content = (data && data?.content) ? data.content : 'To be updated...';
  const lastUpdated = (data && data?.updatedAt) ? helperUtil.formatDate(data.updatedAt) : '';

  return (
    <Fragment>
      <div className='root-section !py-10 space-y-10'>
        <div className='space-y-4'>
          <h1 className='text-3xl lg:text-4xl font-gishaBold text-center'>
            Referral and Affiliate Policy
          </h1>
          {lastUpdated && (
            <p className='text-center text-sm'>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Fragment>
  )
}
