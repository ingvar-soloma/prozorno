import { homeRoute } from '#/views/home/HomeRoute';
import { createRouter, createWebHistory } from 'vue-router';

// Instance of VueRouter.
export const router = createRouter({
  history: createWebHistory(),
  routes: [homeRoute]
});
