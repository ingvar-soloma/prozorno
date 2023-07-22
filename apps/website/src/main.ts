import './App.sass';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import { getLanguage } from './helpers/language';
import { router, i18n, setI18nLang } from './plugins';
import Application from './App.vue';
import type { App } from 'vue';

// Create the application based on props.
export async function create(props: { url?: string }) {
  // Create the Vue application with props.
  const app: App = createApp(Application, props);

  // Current active interface language.
  const language: string = getLanguage();

  // Set and load the I18n language.
  await setI18nLang(language);

  // Configure the application plugins and mount it.
  app.use(i18n).use(router).use(Quasar).mount('#app');
}
