import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-axionly-deep/60 via-axionly-deep/80 to-axionly-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-axionly-deep via-transparent to-axionly-deep/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/4 size-96 -translate-x-1/2 rounded-full bg-axionly-cyan/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-axionly-teal/5 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--axionly-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--axionly-cyan) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Content — 7 cols */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="glass-card mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="size-2 animate-glow-pulse rounded-full bg-axionly-cyan" />
              <span className="font-outfit text-sm font-medium text-axionly-text-secondary">
                {t('hero.badge')}
              </span>
            </div>

            <h1 className="font-sora text-4xl font-extrabold leading-[1.1] text-axionly-text sm:text-5xl lg:text-6xl xl:text-7xl">
              {t('hero.title')}
              <br />
              <span className="bg-gradient-to-r from-axionly-cyan via-axionly-teal to-axionly-cyan bg-clip-text text-transparent">
                {t('hero.titleAccent')}
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-outfit text-base leading-relaxed text-axionly-text-secondary sm:text-lg">
              {t('hero.subtitle')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-axionly-cyan px-8 py-4 font-sora text-base font-semibold text-axionly-deep transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.35)]"
              >
                {t('hero.cta')}
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-axionly-glass-border bg-axionly-glass px-8 py-4 font-sora text-base font-medium text-axionly-text transition-all duration-200 hover:border-axionly-cyan/30 hover:text-axionly-cyan"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </motion.div>

          {/* Floating Glass Panels — 5 cols */}
          <motion.div
            className="relative hidden lg:col-span-5 lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative h-[480px]">
              {/* Panel 1 */}
              <div className="glass-card absolute left-0 top-0 w-72 animate-float rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-axionly-cyan/10">
                    <span className="font-sora text-lg font-bold text-axionly-cyan">99.9</span>
                  </div>
                  <div>
                    <p className="font-sora text-sm font-semibold text-axionly-text">% Uptime</p>
                    <p className="font-outfit text-xs text-axionly-text-muted">System Reliability</p>
                  </div>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-axionly-surface">
                  <div className="h-full w-[99.9%] rounded-full bg-gradient-to-r from-axionly-teal to-axionly-cyan" />
                </div>
              </div>

              {/* Panel 2 */}
              <div className="glass-card absolute right-0 top-24 w-64 rounded-2xl p-6" style={{ animationDelay: '2s', animation: 'float 6s ease-in-out 2s infinite' }}>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/10">
                    <span className="font-sora text-lg font-bold text-green-400">200+</span>
                  </div>
                  <div>
                    <p className="font-sora text-sm font-semibold text-axionly-text">Projects</p>
                    <p className="font-outfit text-xs text-axionly-text-muted">Delivered Successfully</p>
                  </div>
                </div>
              </div>

              {/* Panel 3 */}
              <div className="glass-card absolute bottom-12 left-8 w-80 rounded-2xl p-6" style={{ animationDelay: '4s', animation: 'float 6s ease-in-out 4s infinite' }}>
                <p className="font-outfit text-xs font-medium uppercase text-axionly-text-muted">Latest Deploy</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-400" />
                  <span className="font-sora text-sm font-semibold text-axionly-text">Production — All Systems Go</span>
                </div>
                <div className="mt-3 flex gap-2">
                  {['React', 'Node.js', 'AWS'].map((tag) => (
                    <span key={tag} className="rounded-md bg-axionly-surface px-2 py-1 font-outfit text-xs text-axionly-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow orb */}
              <div className="absolute right-12 top-1/2 size-32 -translate-y-1/2 rounded-full bg-axionly-cyan/10 blur-[60px]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="size-6 text-axionly-text-muted" />
        </motion.div>
      </div>
    </section>
  );
}
