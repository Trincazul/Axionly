import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { SITE_CONFIG } from '@/constants/config';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-axionly-glass-border bg-axionly-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-1 font-sora text-xl font-bold text-axionly-text">
              Axion<span className="text-axionly-cyan">ly</span>
              <span className="ml-0.5 inline-block size-1.5 rounded-full bg-axionly-cyan" />
            </Link>
            <p className="mt-4 max-w-sm font-outfit text-sm leading-relaxed text-axionly-text-secondary">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Github, href: SITE_CONFIG.social.github },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin },
                { icon: Twitter, href: SITE_CONFIG.social.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-axionly-glass-border bg-axionly-glass text-axionly-text-secondary transition-all duration-200 hover:border-axionly-cyan/30 hover:text-axionly-cyan"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-axionly-text-muted">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: t('nav.home'), to: '/' },
                { label: t('nav.about'), to: '/about' },
                { label: t('nav.portfolio'), to: '/portfolio' },
                { label: t('nav.contact'), to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-outfit text-sm text-axionly-text-secondary transition-colors hover:text-axionly-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="font-sora text-sm font-semibold uppercase tracking-wider text-axionly-text-muted">
              {t('footer.ourServices')}
            </h4>
            <ul className="mt-4 space-y-3">
              {['customSoftware', 'webApps', 'mobile', 'cloud', 'api', 'ai'].map((key) => (
                <li key={key}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-1 font-outfit text-sm text-axionly-text-secondary transition-colors hover:text-axionly-cyan"
                  >
                    {t(`services.${key}`)}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-axionly-glass-border pt-8 sm:flex-row">
          <p className="font-outfit text-xs text-axionly-text-muted">
            © {new Date().getFullYear()} Axionly. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <button className="font-outfit text-xs text-axionly-text-muted transition-colors hover:text-axionly-text-secondary">
              {t('footer.privacy')}
            </button>
            <button className="font-outfit text-xs text-axionly-text-muted transition-colors hover:text-axionly-text-secondary">
              {t('footer.terms')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
