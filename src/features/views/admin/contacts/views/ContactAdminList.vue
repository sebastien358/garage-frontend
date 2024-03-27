<template>
  <div v-if="!isLoading" class="contacts-list">
    <table>
      <thead>
        <tr>
          <th>reference</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>tel</th>
          <th>message</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-for="contact in contacts" :key="contact.id">
        <tr>
          <td>{{contact.reference}}</td>
          <td>{{contact.firstName}}</td>
          <td>{{contact.lastName}}</td>
          <td>{{contact.email}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.message}}</td>
          <td class="container-icon">
            <font-awesome-icon icon="fa-solid fa-eye" />
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useContactAdminStore} from "@/stores/admin/contactAdminStore";

const isLoading = ref(true)

const contactAdminStore = useContactAdminStore()
const { contacts } = storeToRefs(contactAdminStore)

onMounted(async () => {
  await contactAdminStore.getContacts()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
.contacts-list {
  padding: 10px;
}

.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  .fa-eye {
    cursor: pointer;
  }
  .fa-pen-to-square {
    cursor: pointer;
    color: green;
  }
}
</style>
