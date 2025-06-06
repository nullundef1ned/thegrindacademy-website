import LandingSection from './_components/LandingSection';
import CourseOfferingsSection from './_components/CourseOfferingsSection';
import CommunityInvitationSection from './_components/CommunityInvitationSection';
import CoursesSection from './_components/CoursesSection';
import DynamicContentSection from './_components/DynamicContentSection';
import TestimonialSection from './_components/TestimonialSection';
import PlansSection from './_components/PlansSection';
import RiskFreeSection from './_components/RiskFreeSection';
import SuccessStoriesSection from './_components/SuccessStoriesSection';
import CertificateSection from './_components/CertificateSection';
import FAQSection from './_components/FAQSection';
import { Fragment } from 'react';
import InfluencerSection from './_components/InfluencerSection';
import AffiliateProgramInvitation from './_components/AffiliateProgramInvitation';

export default function Home() {
  return (
    <Fragment>
      <LandingSection />
      <InfluencerSection />
      <CourseOfferingsSection />
      <TestimonialSection />
      <CommunityInvitationSection />
      <CoursesSection />
      <DynamicContentSection />
      <RiskFreeSection />
      <PlansSection />
      <SuccessStoriesSection />
      <AffiliateProgramInvitation />
      <CertificateSection />
      <FAQSection />
    </Fragment>
  );
}
