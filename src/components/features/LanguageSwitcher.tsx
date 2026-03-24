import { useLanguageStore } from '@/stores/languageStore';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
      className="group flex items-center gap-1.5 rounded-lg border border-axionly-glass-border bg-axionly-glass px-3 py-2 font-outfit text-sm font-medium text-axionly-text-secondary transition-all duration-200 hover:border-axionly-cyan/30 hover:text-axionly-text"
      aria-label="Switch language"
    >
      <Globe className="size-4 text-axionly-cyan transition-transform duration-200 group-hover:rotate-12" />
      <span className="uppercase">{language === 'en' ? 'PT' : 'EN'}</span>
    </button>
  );
}
