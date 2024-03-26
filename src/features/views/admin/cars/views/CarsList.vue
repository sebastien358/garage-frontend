<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center cars-list">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>reference</th>
            <th> mileage</th>
            <th>price</th>
            <th>Year</th>
            <th>Fuel</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="car in cars" :key="car.id">
          <tr>
            <td>{{car.model}}</td>
            <td>{{car.reference}}</td>
            <td>{{car.mileage}}</td>
            <td>{{car.price}}</td>
            <td>{{new Date(car.circulationYear).getFullYear()}}</td>
            <td>{{car.fuel}}</td>
            <td class="container-icon">
              <font-awesome-icon icon="fa-solid fa-eye" />
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useCarAdminStore} from "@/stores/admin/carAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const carAdminStore = useCarAdminStore()
const { cars } = storeToRefs(carAdminStore)

onMounted(async () => {
  await carAdminStore.getCars()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.cars-list {
  padding: 10px;
}

.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 7px;
  .fa-eye {
    cursor: pointer;
    font-size: 13px;
  }
  .fa-pen-to-square {
    cursor: pointer;
    color: green;
  }
}

</style>