<template>
  <div class="app-container">
    <ContactHeader class="contact-header" />
    <div v-if="message" class="message">
      <Alert />
    </div>
    <Header class="header" />
    <div class="component">
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/views/Header.vue";
import Footer from "@/components/footer/views/Footer.vue";
import ContactHeader from "@/components/contactHeader/views/ContactHeader.vue";
import {useMessageStore} from "@/stores/messageStore";
import {storeToRefs} from "pinia";
import Alert from "@/components/alert/views/Alert.vue";

const messageStore = useMessageStore()
const { message, error } = storeToRefs(messageStore)
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.app-container {
  display: grid;
  grid-template-rows: 50px auto 110px 1fr auto;
  height: 100vh;
  grid-template-areas:
  'contact-header'
  'message'
  'header'
  'component'
  'footer';

  @include m.md {
    grid-template-rows: 100px auto 1fr auto;
    grid-template-areas:
    'header'
    'message'
    'component'
    'footer';
  }

  @include m.sm {
    grid-template-rows: 80px auto 1fr auto;
    grid-template-areas:
    'header'
    'message'
    'component'
    'footer';
  }
}

.contact-header {
  grid-area: contact-header;
  height: 50px;
  @include m.md {
    display: none;
  }
}

.header {
  grid-area: header;
}

.component {
  grid-area: component;
}

.footer {
  grid-area: footer;
}
</style>