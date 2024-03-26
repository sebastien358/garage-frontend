<template>
  <div v-if="!isLoading" class="nav-admin">
    <ul class="nav-admin-list">
      <h3>Utilisateurs</h3>
      <li>
        <router-link
          :to="{name: 'admin-user-profile',
          params: {id: user.id}}"
          class="link"
        >
          Profile utilisateur
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'admin-users-list'}"
          class="link"
        >
          Liste des utilisateurs
        </router-link>
      </li>
    </ul>

    <ul class="nav-admin-list">
      <h3>Voitures</h3>
      <li>
        <router-link
          :to="{name: 'admin-cars-list'}"
          class="link"
        >
          Liste des véhicules
        </router-link>
      </li>
      <li>
        <router-link
          :to="{name: 'admin-car-create'}"
          class="link"
        >
          Ajouter un véhicule
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const userAdminStore = useUserAdminStore()
const { user } = storeToRefs(userAdminStore)

onMounted(async () => {
  await userAdminStore.getMe()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.nav-admin {
  background-color: #f1f2f6;
  min-width: 190px;
  padding: 0 10px;
  height: calc(100vh - 700px);
  margin: 10px 0;
  @include m.lg {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.60);
    color: white;
    height: auto;
    top: 152px;
    left: 0;
  }
  @include m.md {
    top: 92px;
  }
  @include m.sm {
    top: 72px;
  }
  h3 {
    font-size: 16px;
    margin-bottom: 5px;
    @include m.lg {
      font-size: 13px;
      color: white;
    }
  }
  li {
    margin-bottom: 5px;
  }
}

.nav-admin-list {
  margin-bottom: 15px;
}

.link {
  font-size: 13px;
  color: black;
  text-decoration: none;
  @include m.lg {
    color: white;
    font-size: 13px;
  }
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
