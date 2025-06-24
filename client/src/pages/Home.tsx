import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { IntegrationSection } from '@/components/IntegrationSection';
import { FeaturesRoadmapSection } from '@/components/FeaturesRoadmapSection';
import { OmnichannelSection } from '@/components/OmnichannelSection';
import { AgentsSection } from '@/components/AgentsSection';
import { DashboardSection } from '@/components/DashboardSection';
import { VideoSection } from '@/components/VideoSection';
import { IndustrySection } from '@/components/IndustrySection';
import { PerformanceSection } from '@/components/PerformanceSection';
import { ImplementationSection } from '@/components/ImplementationSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState(0);

  return (
    <div className="min-h-screen bg-background scroll-smooth overflow-x-hidden">
      <Navigation />
      <HeroSection selectedAgent={selectedAgent} onAgentChange={setSelectedAgent} />
      <IntegrationSection />
      <FeaturesRoadmapSection />
      <OmnichannelSection />
      <AgentsSection selectedAgent={selectedAgent} onAgentChange={setSelectedAgent} />
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
