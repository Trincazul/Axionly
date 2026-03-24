import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          className="glass-card relative overflow-hidden rounded-3xl p-10 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative */}
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-axionly-cyan/8 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-axionly-teal/6 blur-[80px]" />
          <div className="glow-line absolute left-0 right-0 top-0" />

          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="font-sora text-2xl font-bold text-axionly-text sm:text-3xl lg:text-4xl">
                {t('contactCta.title')}{' '}
                <span className="bg-gradient-to-r from-axionly-cyan to-axionly-teal bg-clip-text text-transparent">
                  {t('contactCta.titleAccent')}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl font-outfit text-base leading-relaxed text-axionly-text-secondary">
                {t('contactCta.subtitle')}
              </p>
            </div>
            <div className="flex lg:col-span-4 lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-axionly-cyan px-8 py-4 font-sora text-base font-semibold text-axionly-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)]"
              >
                {t('contactCta.cta')}
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
