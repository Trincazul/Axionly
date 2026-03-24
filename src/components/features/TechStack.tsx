import { useTranslation } from '@/hooks/useTranslation';
import { techStackItems } from '@/constants/mockData';
import { motion } from 'framer-motion';

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
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
              {t('techStack.badge')}
            </span>
          </div>
          <h2 className="font-sora text-3xl font-bold text-axionly-text lg:text-4xl">
            {t('techStack.title')}{' '}
            <span className="text-axionly-cyan">{t('techStack.titleAccent')}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
            {t('techStack.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {techStackItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass-card-hover flex items-center gap-3 rounded-xl px-5 py-3.5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <span className="font-sora text-sm font-semibold text-axionly-text">{item.name}</span>
              <span className="rounded-md bg-axionly-cyan/10 px-2 py-0.5 font-outfit text-xs text-axionly-cyan">
                {item.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
