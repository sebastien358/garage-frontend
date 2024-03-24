<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center reset-request-password">
      <form @submit.prevent="onSubmit(editPassword)">
        <div class="input-group">
          <input v-model="editPassword.password" type="password" placeholder="Entrer un mot de passe" required>
        </div>
        <div class="input-group">
          <input v-model="editPassword.confirm" type="password" placeholder="Confirmation de mot de passe" required>
        </div>
        <div class="container-button">
          <button type="submit" class="btn-request-password">Modifier le mot de passe</button>
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
import {useRoute, useRouter} from "vue-router";
import {useMessageStore} from "@/stores/messageStore";

const isLoading = ref(true)

const userStore = useUserStore()
const { editPassword } = storeToRefs(userStore)

onMounted(async () => {
  await userStore.initPassword()
  isLoading.value = false
})

const messageStore = useMessageStore()

const route = useRoute()
const router = useRouter()

const onSubmit = async (editPassword) => {
  if (editPassword.password !== editPassword.confirm) {
    messageStore.addMessage('Les mots de passe ne correspondent pas', 'error')
  }
  await userStore.resetPassword(route.params.token)
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
  padding: 10px 12px 13px 12px;
}

.input-group {
  margin-top: 9px;
  input {
    padding: 10px;
  }
}

.container-button {
  margin-top: 7px;
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