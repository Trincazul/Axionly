import { useTranslation } from '@/hooks/useTranslation';
import { testimonials } from '@/constants/mockData';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 size-80 -translate-x-1/2 rounded-full bg-axionly-cyan/3 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
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
              {t('testimonials.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('testimonials.title')}{' '}
            <span className="text-axionly-cyan">{t('testimonials.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-card-hover flex flex-col rounded-2xl p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Quote className="mb-4 size-8 text-axionly-cyan/30" />
              <p className="flex-1 font-outfit text-sm italic leading-relaxed text-axionly-text-secondary">
                {t(item.quoteKey)}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-axionly-glass-border pt-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-sora text-sm font-semibold text-axionly-text">{item.name}</p>
                  <p className="font-outfit text-xs text-axionly-text-muted">
                    {item.roleKey} · {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
