import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import StatsSection from '@/components/features/StatsSection';
import TeamSection from '@/components/features/TeamSection';
import ContactCTA from '@/components/features/ContactCTA';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-32 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-axionly-cyan/5 to-transparent" />
        <div className="absolute right-1/4 top-1/3 size-96 rounded-full bg-axionly-teal/4 blur-[140px]" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="size-2 rounded-full bg-axionly-cyan" />
              <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
                {t('about.badge')}
              </span>
            </div>
            <h1 className="font-sora text-4xl font-bold text-axionly-text lg:text-5xl">
              {t('about.title')}{' '}
              <span className="text-axionly-cyan">{t('about.titleAccent')}</span>
            </h1>
            <p className="mt-4 max-w-2xl font-outfit text-lg leading-relaxed text-axionly-text-secondary">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-outfit text-lg leading-relaxed text-axionly-text-secondary">
                {t('about.story')}
              </p>
              <p className="mt-6 font-outfit text-lg leading-relaxed text-axionly-text-secondary">
                {t('about.storySecond')}
              </p>
            </motion.div>

            <div className="flex flex-col gap-5 lg:col-span-5">
              {[
                { icon: Target, titleKey: 'about.missionTitle', descKey: 'about.mission' },
                { icon: Eye, titleKey: 'about.visionTitle', descKey: 'about.vision' },
              ].map(({ icon: Icon, titleKey, descKey }, index) => (
                <motion.div
                  key={titleKey}
                  className="glass-card rounded-2xl p-7"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-axionly-cyan/10">
                    <Icon className="size-5 text-axionly-cyan" />
                  </div>
                  <h3 className="font-sora text-base font-semibold text-axionly-text">{t(titleKey)}</h3>
                  <p className="mt-2 font-outfit text-sm leading-relaxed text-axionly-text-secondary">{t(descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-axionly-base/30 py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sora text-2xl font-bold text-axionly-text lg:text-3xl">
              <Heart className="mb-1 mr-2 inline-block size-6 text-axionly-cyan" />
              {t('about.valuesTitle')}
            </h2>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { titleKey: 'about.value1', descKey: 'about.value1Desc' },
              { titleKey: 'about.value2', descKey: 'about.value2Desc' },
              { titleKey: 'about.value3', descKey: 'about.value3Desc' },
              { titleKey: 'about.value4', descKey: 'about.value4Desc' },
            ].map((val, index) => (
              <motion.div
                key={val.titleKey}
                className="glass-card-hover rounded-2xl p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-3 size-8 rounded-lg bg-axionly-cyan/10 text-center font-sora text-sm font-bold leading-8 text-axionly-cyan">
                  {index + 1}
                </div>
                <h3 className="font-sora text-base font-semibold text-axionly-text">{t(val.titleKey)}</h3>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-axionly-text-secondary">{t(val.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <ContactCTA />
    </>
  );
}
