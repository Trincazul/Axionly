import ProjectsShowcase from '@/components/features/ProjectsShowcase';
import ContactCTA from '@/components/features/ContactCTA';

export default function Portfolio() {
  return (
    <>
      <div className="pt-24 lg:pt-32" />
      <ProjectsShowcase showAll />
      <ContactCTA />
    </>
  );
}
