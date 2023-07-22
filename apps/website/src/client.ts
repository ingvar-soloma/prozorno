import { create } from './main';

// Create the application for browser context.
create({ url: window.location.pathname }).catch(console.error);
