<template>
  <BaseTemplate>
    <div class="container">
      <div class="admin">
        <Calc @close="state.open = false" :open="state.open && state.isLoading" :transparent="true" />
        <Transition>
          <NavAdmin v-if="state.open" />
        </Transition>
        <div class="d-flex flex-column component">
          <div class="d-flex flex-column container-button">
            <button @click="state.open = !state.open" class="btn-menu">Menu</button>
          </div>
          <div class="#">
            <RouterView v-slot="{Component}">
              <Component :is="Component" />
            </RouterView>
          </div>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import NavAdmin from "@/features/views/admin/component/NavAdmin.vue";
import {reactive} from "vue";
import Calc from "@/components/calc/views/Calc.vue";

const state = reactive<{
  open: boolean
  isLoading: boolean
}>({
  open: !matchMedia('(max-width: 991.98px)').matches,
  isLoading: matchMedia('(max-width: 991.98px)').matches,
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.admin {
  display: flex;
  align-items: start;
  height: 100%;
  margin: 0 10px;
}

.component {
  width: 100%;
}

.container-button {
  margin-top: 10px;
  text-align: center;
  width: 100%;
  display: none;
  @include m.lg {
    display: block;
  }
  .btn-menu {
    cursor: pointer;
    color: white;
    background-color: #01a3a4;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    border: 0;
  }
}

/* we will explain what these classes do next! */

.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  @include m.lg {
    transform: translateX(-100%);
  }
}
</style>