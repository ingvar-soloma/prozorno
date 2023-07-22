import { createI18n } from 'vue-i18n';

// Loaded languages.
const languages: string[] = [];

// Instance of VueI18n.
export const i18n = createI18n({
  locale: 'uk',
  sync: true,
  legacy: false,
  fallbackLocale: 'uk',
  allowComposition: true
});

/**
 * Set and load new language.
 * @param lang Language code.
 * @returns Operation status.
 */
export async function setI18nLang(lang: string): Promise<void> {
  // Load the lang messages.
  await loadI18nLang(lang);
  // Change the locale at i18n.
  i18n.global.locale.value = lang;
}

/**
 * Load new messages based on lang.
 * @param lang Language code.
 * @returns Operation status.
 */
async function loadI18nLang(lang: string): Promise<any> {
  // In case language not changed or it's loaded.
  if (languages.includes(lang)) return;

  // prettier-ignore
  const i18LangMessages: Record<string, any> =
    await fetch(`/locales/${lang}.json`)
      .then((res: Response): Record<string, any> => res.json());

  // Set new messages to i18n for defined language.
  i18n.global.setLocaleMessage(lang, i18LangMessages);

  // Add the lang to the cache to improve performance.
  languages.push(lang);
}
