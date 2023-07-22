<template lang="pug">
  q-layout.app(view="lHh Lpr lff")
    q-page-container
      q-page.app__page
        router-view(
          :key="route.fullPath",
          v-slot="{ Component }")
          component(
            v-if="Component",
            :is="Component")
          base-loading(v-else)
</template>

<script lang="ts" setup>
  import { provide } from 'vue';
  import { useRoute, type RouteLocationNormalized } from 'vue-router';
  import { getLanguage } from './helpers/language';
  import BaseLoading from '#/base/BaseLoading.vue';

  // Define the props.
  const props = defineProps<{
    url: string;
  }>();

  // Current active interface language.
  const language: string = $ref(getLanguage());

  // Composable to handle the Route.
  const route: RouteLocationNormalized = useRoute();

  // Globally provide interface language.
  provide('language', $$(language));
</script>

<style lang="sass">
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars.sass' as *

  .app
    color: $text-color

    h1,
    h2,
    h3
      margin: 0 0 $offset * 2
      line-height: 1.2

    h4,
    h5
      margin: 0 0 $offset
      line-height: 1.2

    h1
      font-size: $h1

    h2
      font-size: $h2

    h3
      font-size: $h3

    a
      color: $text-color
      text-decoration: none

  .q-tabs
    transition: color 0.03s, background-color 0.01s

  .q-focus-helper
    &, &:after, &:before
      transition: background-color 0.1s, opacity 0.1s !important
</style>
