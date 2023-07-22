import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

// Routes are definitions (objects) comprised from at least
// a path and a component. The path refers to the part of the
// URL that determines a unique view that should be displayed,
// and component refers to the Vue component that needs to be
// associated with a path.
// https://router.vuejs.org/api/#routerecordraw
export const homeRoute: RouteRecordRaw = {
  name: 'home',
  path: '/',
  component: (): Promise<Component> => {
    return import('./HomeView.vue');
  }
};
