import type { Tabs } from '@/lib/schemas/tabParams.schema';

import familyGatheringMobile from '@/assets/jpgs/home/family-gathering/mobile/family-gathering-mobile.jpg';
import familyGatheringTablet from '@/assets/jpgs/home/family-gathering/tablet/family-gathering-tablet.jpg';
import familyGatheringDesktop from '@/assets/jpgs/home/family-gathering/desktop/family-gathering-desktop.jpg';

import specialEventsMobile from '@/assets/jpgs/home/special-events/mobile/special-events-mobile.jpg';
import specialEventsTablet from '@/assets/jpgs/home/special-events/tablet/special-events-tablet.jpg';
import specialEventsDesktop from '@/assets/jpgs/home/special-events/desktop/special-events-desktop.jpg';

import socialEventsMobile from '@/assets/jpgs/home/social-events/mobile/social-events-mobile.jpg';
import socialEventsTablet from '@/assets/jpgs/home/social-events/tablet/social-events-tablet.jpg';
import socialEventsDesktop from '@/assets/jpgs/home/social-events/desktop/social-events-desktop.jpg';

type TabContent = { heading: string; text: string; image: Record<'mobile' | 'tablet' | 'desktop', string> };

const tabs: Record<Tabs, TabContent> = {
  family: {
    heading: 'Family Gathering',
    text: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    image: { mobile: familyGatheringMobile, tablet: familyGatheringTablet, desktop: familyGatheringDesktop },
  },
  special: {
    heading: 'Special Events',
    text: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    image: { mobile: specialEventsMobile, tablet: specialEventsTablet, desktop: specialEventsDesktop },
  },
  social: {
    heading: 'Social Events',
    text: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    image: { mobile: socialEventsMobile, tablet: socialEventsTablet, desktop: socialEventsDesktop },
  },
};

export { tabs };
