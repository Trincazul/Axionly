import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/features/LanguageSwitcher';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'about', path: '/about' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'contact', path: '/contact' },
];

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="relative z-50 flex items-center gap-1 font-sora text-xl font-bold text-axionly-text">
          Axion<span className="text-axionly-cyan">ly</span>
          <span className="ml-0.5 inline-block size-1.5 rounded-full bg-axionly-cyan" />
        </Link>

        {/* Desktop Nav */}
        <nav className="glass-card hidden items-center gap-1 rounded-2xl px-2 py-2 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`relative rounded-xl px-4 py-2 font-outfit text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-axionly-cyan/10 text-axionly-cyan'
                    : 'text-axionly-text-secondary hover:text-axionly-text'
                }`}
              >
                {t(`nav.${item.key}`)}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-axionly-cyan" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-xl bg-axionly-cyan px-5 py-2.5 font-sora text-sm font-semibold text-axionly-deep transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)]"
          >
            {t('nav.cta')}
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 rounded-lg p-2 text-axionly-text lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-axionly-deep/98 px-6 pt-24 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl px-5 py-4 font-sora text-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-axionly-cyan/10 text-axionly-cyan'
                        : 'text-axionly-text-secondary hover:bg-axionly-elevated hover:text-axionly-text'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 flex items-center gap-4">
              <LanguageSwitcher />
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-axionly-cyan px-5 py-3.5 font-sora text-sm font-semibold text-axionly-deep"
              >
                {t('nav.cta')}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
