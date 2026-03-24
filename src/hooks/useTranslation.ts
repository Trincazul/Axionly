import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/constants/translations';

export function useTranslation() {
  const { language } = useLanguageStore();

  function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  }

  return { t, language };
}
