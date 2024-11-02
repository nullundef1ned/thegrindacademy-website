import LandingSection from './_components/LandingSection';
import CourseOfferingsSection from './_components/CourseOfferingsSection';
import CommunityInvitationSection from './_components/CommunityInvitationSection';
import CoursesSection from './_components/CoursesSection';

export default function Home() {
  return (
    <div className='space-y-4'>
      <LandingSection />
      <CourseOfferingsSection />
      <CommunityInvitationSection />
      <CoursesSection />
    </div>
  );
}
