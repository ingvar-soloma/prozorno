<template lang="pug">
  .home-view
    .home-view__corruptions(
      v-for="corruption in corruptions",
      :key="corruption.id")
      | {{ corruption.url }}
    inline-svg(src="/ukraine.svg")
</template>

<script lang="ts" setup>
  import InlineSvg from 'vue-inline-svg';
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import { useHomeQuery } from '#/api/query/home';

  // Composable to handle the home query.
  const { corruptions, execHomeQuery } = useHomeQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadHome);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadHome);

  // Load the Home from server based on current lang.
  async function loadHome(): Promise<void> {
    return execHomeQuery();
  }
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *

  .home-view
    +flex-col-center

    :deep(path)
      transition: fill 1s

    :deep(path:hover)
      cursor: pointer
      fill: #66a2fa
</style>
