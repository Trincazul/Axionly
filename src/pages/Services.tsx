import ServicesGrid from '@/components/features/ServicesGrid';
import ProcessSection from '@/components/features/ProcessSection';
import TechStack from '@/components/features/TechStack';
import ContactCTA from '@/components/features/ContactCTA';
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden pb-8 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-axionly-cyan/5 to-transparent" />
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-axionly-cyan/4 blur-[140px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="size-2 rounded-full bg-axionly-cyan" />
              <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
                {t('services.badge')}
              </span>
            </div>
            <h1 className="font-sora text-4xl font-bold text-axionly-text lg:text-5xl">
              {t('services.title')}{' '}
              <span className="text-axionly-cyan">{t('services.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl font-outfit text-lg leading-relaxed text-axionly-text-secondary">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      <ServicesGrid showAll />
      <ProcessSection />
      <TechStack />
      <ContactCTA />
    </>
  );
}
