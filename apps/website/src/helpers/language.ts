import Cookie from 'cookiejs';

/**
 * Set language to the local storage.
 * @param language Language to store.
 */
export function setLanguage(language: string): void {
  Cookie.set('language', language);
}

/**
 * Retrieve the language from store or url.
 * @returns Language to use on UI.
 */
export function getLanguage(): string {
  return (Cookie.get('language') || 'uk').toString();
}
