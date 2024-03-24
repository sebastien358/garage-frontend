<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center reset-request-password">
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <input v-model="editEmail.email" type="email" required>
          <div class="container-button">
            <button type="submit" class="btn-request-password">Réinitialiser le mot de passe</button>
          </div>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/userStore";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const userStore = useUserStore()
const { editEmail } = storeToRefs(userStore)

onMounted(() => {
  userStore.initEmail()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await userStore.resetRequestPassword()
  await router.push({name: 'home'})
}
</script>

<style scoped lang="scss">
.reset-request-password {
  height: 100%;
  padding: 20px 10px;
}

form {
  max-width: 550px;
  border-radius: 4px;
  padding: 0 12px 13px 12px;
}

.input-group {
  input {
    padding: 10px;
  }
}

.container-button {
  margin-top: 5px;
  .btn-request-password {
    cursor: pointer;
    color: white;
    font-size: 13px;
    background-color: #d63031;
    padding: 9px 12px;
    border: 0;
    border-radius: 4px;
  }
}
</style>