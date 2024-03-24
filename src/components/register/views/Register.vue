<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="px-10 d-flex justify-content-center align-items-center register">
      <form @submit.prevent="onSubmit(editRegister)">
        <h3>Inscription</h3>
        <div class="input-group">
          <input
            v-model="editRegister.firstName"
            placeholder="Prénom"
            type="text"
            minlength="3"
            maxlength="128"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editRegister.lastName"
            placeholder="Nom"
            type="text"
            minlength="3"
            maxlength="128"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editRegister.email"
            placeholder="Email"
            type="email"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editRegister.password"
            placeholder="Mot de passe"
            type="password"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editRegister.confirm"
            placeholder="Confirmation mot de passe"
            type="password"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="d-flex flex-column container-button">
          <button
            type="submit"
            class="btn btn-register"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useRegisterAdminStore} from "@/stores/admin/registerAdminStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useMessageStore} from "@/stores/messageStore";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const registerAdminStore = useRegisterAdminStore()
const { editRegister } = storeToRefs(registerAdminStore)

onMounted(() => {
  registerAdminStore.initRegister()
  isLoading.value = false
})

const messageStore = useMessageStore()

const router = useRouter()

const onSubmit = async (editRegister) => {
  if (editRegister.password !== editRegister.confirm) {
    messageStore.addMessage('Les mots de passe ne correspondent pas', 'error')
  }
  await registerAdminStore.register()
  await router.push({name: 'home'})
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.register {
  height: 100%;
  padding: 20px;
}

form {
  padding: 30px 20px 20px 20px;
  @include m.md {
    padding: 20px;
    form {
      max-width: 350px;
    }
  }
}

.container-button {
  margin-top: 8px;
  @include m.sm {
    margin-top: 7px;
  }
}
</style>