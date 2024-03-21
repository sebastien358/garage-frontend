<template>
  <Teleport v-if="open" to="body">
    <div @click="emit('close')" class="calc" :class="{transparent}"></div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  open?: boolean
  transparent?: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped lang="scss">
.calc {
  background-color: rgba(0, 0, 0, 0.30);
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
}

.transparent {
  background-color: transparent;
}
</style>