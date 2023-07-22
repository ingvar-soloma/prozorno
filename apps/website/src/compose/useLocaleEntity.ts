import { cast } from '#/api/helpers';
import { inject, Ref } from 'vue';

/**
 * Composable to handle localized entity.
 */
export function useLocaleEntity(entity) {
  // Current active interface language.
  const language: string = $(inject('language'));

  // Determine localized entity based on lang.
  const localized = $computed(() => {
    return findByLocale(entity.value?.localizations);
  });

  // Find the localized entity by defined locale.
  function findByLocale(entities) {
    return entities?.find((entity): boolean => {
      return entity.locale === language;
    });
  }

  return { localized: cast<Ref<typeof entity>>($$(localized)) };
}
