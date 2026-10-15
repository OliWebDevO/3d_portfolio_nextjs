export const locales = ['fr', 'en'] as const;
export const defaultLocale: Language = 'fr';

export function isLocale(value: string): value is Language {
  return (locales as readonly string[]).includes(value);
}

export function alternatesFor(lang: Language, path = '') {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      fr: `/fr${path}`,
      en: `/en${path}`,
      'x-default': `/fr${path}`,
    },
  };
}
