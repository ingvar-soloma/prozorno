import pluginVue from '@vitejs/plugin-vue';
import pluginGraphQL from '@rollup/plugin-graphql';
import { quasar as pluginQuasar } from '@quasar/vite-plugin';
import pluginDeIndent from './plugin/deIndent';
import { resolve } from './vite.resolve';
import type { UserConfig } from 'vite';

// Define and export vite configs.
// https://vitejs.dev/config
export default <UserConfig>{
  resolve,
  plugins: [
    pluginGraphQL(),
    pluginDeIndent(),
    pluginQuasar({
      sassVariables: false
    }),
    pluginVue({
      reactivityTransform: true
    })
  ]
};
