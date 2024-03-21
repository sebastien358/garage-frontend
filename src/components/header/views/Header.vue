<template>
  <div class="d-flex align-items-center container">
    <header class="d-flex align-items-center space-between w-100">
      <div class="d-flex align-items-center">
        <img src="@/assets/images/race-car-309123_640.png" class="logo">
        <nav>
          <ul class="d-flex align-items-center menu-desktop">
            <li class="mr-20">
              <router-link :to="{name: 'home'}" class="link">Accueil</router-link>
            </li>
            <li class="mr-20">
              <router-link :to="{name: 'used-cars'}" class="link">Nos Occasions</router-link>
            </li>
            <li class="mr-20">
              <router-link :to="{name: 'contact'}" class="link">Nous Contacter</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <nav>
        <ul class="d-flex align-items-center authentification">
          <li class="mr-10">
            <router-link :to="{name: 'register'}" class="link">Inscription</router-link>
          </li>
          <li>
            <router-link :to="{name: 'login'}" class="link">Connexion</router-link>
          </li>
        </ul>
      </nav>

      <nav class="menu-mobile">
        <Calc @close="state.open = false" :open="state.open" :transparent="true" />
        <font-awesome-icon @click="state.open = !state.open" icon="fa-solid fa-bars" />
        <Transition>
          <ul v-if="state.open" class="menu-mobile-content">
            <li>
              <router-link :to="{name: 'home'}" class="link">Accueil</router-link>
            </li>
            <li>
              <router-link :to="{name: 'used -cars'}" class="link">Nos Occasions</router-link>
            </li>
            <li>
              <router-link :to="{name: 'contact'}" class="link">Nous Contacter</router-link>
            </li>
            <li>
              <router-link :to="{name: 'register'}" class="link">Inscription</router-link>
            </li>
            <li>
              <router-link :to="{name: 'login'}" class="link">Connexion</router-link>
            </li>
          </ul>
        </Transition>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import Calc from "@/components/calc/views/Calc.vue";

const state = reactive<{
  open: boolean
}>({
  open: false
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.container {
  height: 100%;
}

header {
  z-index: 1;
  position: relative;
  height: 110px;
  margin: 0 10px;
  border-bottom: 1px solid #dfe4ea;
  @include m.md {
    justify-content: space-between;
    height: 100px;
  }
  @include m.sm {
    height: 80px;
  }
}

.logo {
  display: none;
  @include m.md {
    display: block;
    height: 160px;
    position: relative;
    right: 10px;
  }
  @include m.sm {
    display: block;
    height: 125px;
  }
}

.link {
  color: #777;
  font-size: 18px;
  text-decoration: none;
}

@include m.md {
  .menu-desktop,
  .authentification {
    display: none;
  }
}

.menu-mobile {
  display: none;
  @include m.md {
    display: block;
  }
  .fa-bars {
    cursor: pointer;
    font-size: 29px;
    @include m.md {
      position: relative;
      right: 5px;
    }
    @include m.sm {
      font-size: 27px;
    }
  }
  .menu-mobile-content {
    padding: 80px 450px 80px 20px;
    position: absolute;
    background-color: var(--text-primary-color);
    border: 1px solid #dfe4ea;
    right: -9px;
    top: 90px;
    @include m.sm {
      padding: 40px 200px 40px 20px;
      top: 70px;
    }
    li {
      margin-bottom: 15px;
      @include m.sm {
        margin-bottom: 10px;
      }
    }
  }
}

/* we will explain what these classes do next! */

.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.router-link-exact-active {
  color: #d63031 !important;
}
</style>
