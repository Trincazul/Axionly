import HeroSection from '@/components/features/HeroSection';
import StatsSection from '@/components/features/StatsSection';
import ServicesGrid from '@/components/features/ServicesGrid';
import ProjectsShowcase from '@/components/features/ProjectsShowcase';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import ContactCTA from '@/components/features/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <ProjectsShowcase />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
