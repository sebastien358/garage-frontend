<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center profile">
      <form @submit.prevent="onSubmit(editUser)">
        <h3>Se connecter</h3>
        <div class="input-group">
          <input
            v-model="editUser.firstName"
            placeholder="Prénom"
            type="text"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editUser.lastName"
            placeholder="Nom"
            type="text"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editUser.email"
            placeholder="Email"
            type="email"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editUser.newPassword"
            placeholder="Nouveau mot de passe"
            type="password"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editUser.confirm"
            placeholder="Confirmation"
            type="password"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="d-flex flex-column container-button">
          <button type="submit" class="btn-profile">Modifier</button>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {useMessageStore} from "@/stores/messageStore";

const isLoading = ref(true)

const userAdminStore = useUserAdminStore()
const { editUser } = storeToRefs(userAdminStore)

const route = useRoute()

onMounted(async () => {
  await userAdminStore.initUpdateRegister()
  await userAdminStore.getCurrentUser(route.params.id)
  isLoading.value = false
})

const messageStore = useMessageStore()

const onSubmit = async (editUser) => {
  if (editUser.newPassword !== editUser.confirm) {
    messageStore.addMessage('Les mots de passe ne correspondent pas', 'error')
    return false
  }
  await userAdminStore.updateRegister()
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.profile {
  height: calc(100vh - 650px);
  @include m.lg {
    padding: 20px 0;
  }
}

form {
  max-width: 380px;
  padding: 30px 20px 30px 20px;
  @include m.lg {
    padding: 20px;
    max-width: 340px;
  }
  h3 {
    font-size: 21px;
  }
}

.input-group {
  input {
    padding: 12px;
  }
}

.container-button {
  margin-top: 5px;
  .btn-profile {
    cursor: pointer;
    color: var(--text-primary-color);
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 12px;
    font-size: 13px;
    background-color: #d63031;
  }
}
</style>

