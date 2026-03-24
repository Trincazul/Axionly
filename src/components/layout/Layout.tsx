import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { MessageCircle } from 'lucide-react';
import { Toaster } from 'sonner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-axionly-deep">
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--axionly-bg-elevated)',
            border: '1px solid var(--axionly-glass-border)',
            color: 'var(--axionly-text-primary)',
            fontFamily: 'var(--font-outfit)',
          },
        }}
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Floating Contact Button */}
      <Link
        to="/contact"
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-axionly-cyan text-axionly-deep shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] lg:hidden"
        aria-label={t('nav.cta')}
      >
        <MessageCircle className="size-6" />
      </Link>
    </div>
  );
}
