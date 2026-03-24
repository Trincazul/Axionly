import { useTranslation } from '@/hooks/useTranslation';
import { processSteps } from '@/constants/mockData';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = { Search, PenTool, Code2, Rocket };

export default function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-axionly-base/30 py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="size-2 rounded-full bg-axionly-cyan" />
            <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
              {t('process.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('process.title')}{' '}
            <span className="text-axionly-cyan">{t('process.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <motion.div
                key={step.number}
                className="glass-card-hover group relative rounded-2xl p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <span className="absolute right-6 top-5 font-sora text-4xl font-extrabold text-axionly-surface/80">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-axionly-cyan/10 transition-colors duration-300 group-hover:bg-axionly-cyan/20">
                    <Icon className="size-6 text-axionly-cyan" />
                  </div>
                  <h3 className="font-sora text-base font-semibold text-axionly-text">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-3 font-outfit text-sm leading-relaxed text-axionly-text-secondary">
                    {t(step.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
