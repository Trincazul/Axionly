import { create } from 'zustand';
import type { Language } from '@/types';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const getSavedLang = (): Language => {
  const saved = localStorage.getItem('axionly-lang');
  return saved === 'pt' ? 'pt' : 'en';
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: getSavedLang(),
  setLanguage: (language) => {
    localStorage.setItem('axionly-lang', language);
    set({ language });
  },
}));
