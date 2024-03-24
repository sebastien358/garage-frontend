<template>
  <div v-if="type === 'success'" class="message" :class="{success: type}">
    {{message}}
  </div>
  <div v-if="type === 'error'" class="message" :class="{error: type}">
    {{message}}
  </div>
</template>

<script setup lang="ts">
import {useMessageStore} from "@/stores/messageStore";
import {storeToRefs} from "pinia";

const messageStore = useMessageStore()
const { message, type } = storeToRefs(messageStore)

message ? setTimeout(() => {
  messageStore.initMessage()
}, 2000) : null
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.message {
  padding: 20px;
  color: white;
  width: 100%;
  text-align: center;
  @include m.lg {
    font-size: 15px;
    padding: 17px;
  }
  @include m.sm {
    font-size: 14px;
    padding: 15px;
  }
}

.success {
  background-color: green;
}

.error {
  background-color: red;
}
</style>