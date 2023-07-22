import { defineConfig, ProxyOptions } from 'vite';
import buildConfig from '@internal/builder';

// Url to Strapi API endpoint.
const apiUrl: string = process.env.API_URL ?? 'http://127.0.0.1:1337';

// Token to Strapi API endpoint.
const apiToken: string = process.env.API_TOKEN;

// Defines the proxy settings.
const proxy: Record<string, ProxyOptions> = {};

// Proxy to the upload assets.
proxy['/uploads'] = {
  target: apiUrl
};

// Proxy to the graphql server.
proxy['/graphql'] = {
  target: apiUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
};

// Define and export vite configs.
// https://vitejs.dev/config
export default defineConfig({
  ...buildConfig,
  server: {
    proxy
  },
  preview: {
    port: 8080,
    proxy
  }
});
