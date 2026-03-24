import { useTranslation } from '@/hooks/useTranslation';
import { stats } from '@/constants/mockData';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative border-y border-axionly-glass-border bg-axionly-base/50">
      <div className="absolute inset-0 bg-gradient-to-r from-axionly-cyan/5 via-transparent to-axionly-teal/5" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.labelKey}
            className="flex flex-col items-center justify-center border-axionly-glass-border px-6 py-10 [&:not(:last-child)]:border-r"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-baseline gap-0.5">
              <span className="font-sora text-3xl font-extrabold tabular-nums text-axionly-text lg:text-4xl">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="font-sora text-xl font-bold text-axionly-cyan lg:text-2xl">
                  {stat.suffix}
                </span>
              )}
            </div>
            <span className="mt-2 text-center font-outfit text-sm text-axionly-text-secondary">
              {t(stat.labelKey)}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
