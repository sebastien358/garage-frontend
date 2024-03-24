<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center login">
      <form @submit.prevent="onSubmit">
        <h3>Se connecter</h3>
        <div class="input-group">
          <input
            v-model="editLogin.email"
            placeholder="Entrer un email"
            type="text"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editLogin.password"
            placeholder="Entrer un mot de passe"
            type="text"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="container-forgot-password">
          <router-link
            :to="{name: 'request-password'}"
            class="forgot-password"
          >
            Mot de passe oublié?
          </router-link>
        </div>
        <div class="d-flex flex-column container-button">
          <button
            type="submit"
            class="btn btn-login"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useLoginStore} from "@/stores/login";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const loginStore = useLoginStore()
const { editLogin } = storeToRefs(loginStore)

onMounted(async () => {
  await loginStore.initUser()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await loginStore.login()
  await router.push({name: 'admin'})
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.login {
  height: 100%;
  padding: 20px;
}

form {
  max-width: 400px;
  padding: 30px 20px 30px 20px;
  @include m.lg {
    max-width: 360px;
    form {
      padding: 20px;
      max-width: 340px;
    }
  }
}

.container-forgot-password {
  margin: 12px 0;
  position: relative;
  left: 3px;
  .forgot-password {
    font-size: 13px;
    color: var(--gray-3);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>