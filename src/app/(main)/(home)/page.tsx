import LandingSection from './_components/LandingSection';
import CourseOfferingsSection from './_components/CourseOfferingsSection';
import CommunityInvitationSection from './_components/CommunityInvitationSection';
import CoursesSection from './_components/CoursesSection';
import InfoSection from './_components/InfoSection';
import TestimonialSection from './_components/TestimonialSection';
import PlansSection from './_components/PlansSection';
import RiskFreeSection from './_components/RiskFreeSection';
import SuccessStoriesSection from './_components/SuccessStoriesSection';
import CertificateSection from './_components/CertificateSection';
import FAQSection from './_components/FAQSection';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <LandingSection />
      <CourseOfferingsSection />
      <CommunityInvitationSection />
      <CoursesSection />
      <InfoSection />
      <TestimonialSection />
      <PlansSection />
      <RiskFreeSection />
      <SuccessStoriesSection />
      <CertificateSection />
      <FAQSection />
    </Fragment>
  );
}
