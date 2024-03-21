<template>
  <router-view v-slot="{Component}">
    <Suspense>
      <Component :is="Component" />
    </Suspense>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>
