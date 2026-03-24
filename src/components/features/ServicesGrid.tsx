import { useTranslation } from '@/hooks/useTranslation';
import { servicesList } from '@/constants/mockData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Blocks, Globe, Smartphone, Cloud, Webhook, BrainCircuit, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Blocks, Globe, Smartphone, Cloud, Webhook, BrainCircuit,
};

export default function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const { t } = useTranslation();
  const items = showAll ? servicesList : servicesList.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-0 top-0 size-80 rounded-full bg-axionly-cyan/3 blur-[120px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="size-2 rounded-full bg-axionly-cyan" />
            <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
              {t('services.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('services.title')}{' '}
            <span className="text-axionly-cyan">{t('services.titleAccent')}</span>
          </h2>
          <p className="mt-4 font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className={`grid gap-5 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'}`}>
          {items.map((service, index) => {
            const Icon = iconMap[service.icon] || Blocks;
            return (
              <motion.div
                key={service.id}
                className="glass-card-hover group rounded-2xl p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-axionly-cyan/10 transition-colors duration-300 group-hover:bg-axionly-cyan/20">
                  <Icon className="size-6 text-axionly-cyan" />
                </div>
                <h3 className="font-sora text-lg font-semibold text-axionly-text">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-3 font-outfit text-sm leading-relaxed text-axionly-text-secondary">
                  {t(service.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        {!showAll && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="group flex items-center gap-2 rounded-xl border border-axionly-glass-border bg-axionly-glass px-6 py-3 font-sora text-sm font-medium text-axionly-text transition-all duration-200 hover:border-axionly-cyan/30 hover:text-axionly-cyan"
            >
              {t('services.badge')}
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
