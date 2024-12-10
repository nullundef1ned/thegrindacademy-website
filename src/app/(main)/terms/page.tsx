import { ITermsAndConditions } from "@/app/_module/app.interfaces";
import environmentUtil from "@/utils/env.util";
import helperUtil from "@/utils/helper.util";
import { Fragment } from "react";

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service',
  openGraph: {
    title: 'Terms of Service',
    description: 'Terms of Service',
  },
  twitter: {
    title: 'Terms of Service',
    description: 'Terms of Service',
  },
}

export default async function TermsPage() {

  const response = await fetch(`${environmentUtil.API_URL}/website-content/terms-and-conditions`, {
    cache: 'no-store'
  });
  const data = (await response.json()).data as ITermsAndConditions;

  const content = data.content || 'To be updated...';
  const lastUpdated = data.updatedAt ? helperUtil.formatDate(data.updatedAt) : '';

  return (
    <Fragment>
      <div className='root-section !py-10 space-y-10'>
        <div className='space-y-4'>
          <h1 className='text-3xl lg:text-4xl font-gishaBold text-center'>
            Terms of Service
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
