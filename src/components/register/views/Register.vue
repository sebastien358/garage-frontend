<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="px-10 d-flex justify-content-center align-items-center register">
      <form>
        <h3>Inscription</h3>
        <div class="input-group">
          <input v-model="editRegister.email" type="text" placeholder="Entrer un email">
        </div>
        <div class="input-group">
          <input v-model="editRegister.password" type="password" placeholder="Entrer un mot de passe">
        </div>
        <div class="input-group">
          <input v-model="editRegister.confirm" type="password" placeholder="Confirmation mot de passe">
        </div>
        <div class="d-flex flex-column container-button">
          <button type="submit" class="btn btn-register">S'inscrire</button>
        </div>
        <div class="d-flex justify-content-center account">
        <span class="text-align-center">
          j'ai déjà un compte?
          <router-link :to="{name: 'login'}" class="link">Se connecter</router-link>
        </span>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useRegisterStore} from "@/stores/register";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const isLoading = ref(true)

const registerStore = useRegisterStore()
const { editRegister } = storeToRefs(registerStore)

onMounted(() => {
  registerStore.initRegister()
  isLoading.value = false
})

</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.register {
  height: 100%;
  @include m.md {
    height: initial;
    padding: 20px;
  }
}

@include m.md {
  form {
    max-width: 350px;
  }
}
</style>