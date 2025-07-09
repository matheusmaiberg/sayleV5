import { Navigation } from '@/components/section/navigation/Navigation';
import { HeroSection } from '@/components/section/hero/HeroSection';
import { MetricsCards } from '@/components/section/metrics/MetricsCards';
import { IntegrationSection } from '@/components/section/integration';
import { FeaturesRoadmapSection } from '@/components/section/features-roadmap';
import { OmnichannelSection } from '@/components/section/omnichannel';
import { DashboardSection } from '@/components/section/dashboard';
import { VideoSection } from '@/components/section/video';
import { IndustrySection } from '@/components/section/industry';
import { PerformanceSection } from '@/components/section/performance';
import { ImplementationSection } from '@/components/section/implementation';
import { SocialProofSection } from '@/components/section/social-proof';
import { TestimonialSection } from '@/components/section/testimonial';
import { CTASection } from '@/components/section/cta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background scroll-smooth overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MetricsCards />
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
