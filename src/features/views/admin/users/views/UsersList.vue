<template>
  <div v-if="!isLoading" class="users-list">
    <table>
      <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
      <tr>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td>
          <CalcDelete
            @close="state.open = false"
            @on-click-delete="onClickDelete"
            :open="state.open"
            :id="user.id"
          />
          <font-awesome-icon @click="state.open = true" icon="fa-solid fa-trash" />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {storeToRefs} from "pinia";
import CalcDelete from "@/components/calc/views/CalcDelete.vue";

const state = reactive<{
  open: boolean

}>({
  open: false
})

const isLoading = ref(true)

const userAdminStore = useUserAdminStore()
const { users } = storeToRefs(userAdminStore)

onMounted(async () => {
  await userAdminStore.getUsers()
  isLoading.value = false
})

const onClickDelete = async (id: number) => {
  await userAdminStore.deleteUser(id)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.users-list {
  width: 100%;
  padding-top: 10px;
  padding-left: 10px;
  @include m.lg {
    padding-left: 0;
  }
}

.fa-trash {
  font-size: 13px;
  cursor: pointer;
  color: red;
}
</style>