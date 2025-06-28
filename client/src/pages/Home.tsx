import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntegrationSection } from '@/components/IntegrationSection';
import { FeaturesRoadmapSection } from '@/components/FeaturesRoadmapSection';
import { OmnichannelSection } from '@/components/OmnichannelSection';
import { DashboardSection } from '@/components/DashboardSection';
import { VideoSection } from '@/components/VideoSection';
import { IndustrySection } from '@/components/IndustrySection';
import { PerformanceSection } from '@/components/PerformanceSection';
import { ImplementationSection } from '@/components/ImplementationSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background scroll-smooth overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntegrationSection />
      <FeaturesRoadmapSection />
      <OmnichannelSection />
      <DashboardSection />
      <VideoSection />
      <OmnichannelSection />
      <IndustrySection />
      <PerformanceSection />
      <ImplementationSection />
      <SocialProofSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
