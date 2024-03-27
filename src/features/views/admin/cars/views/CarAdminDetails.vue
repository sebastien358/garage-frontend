<template>
  <div v-if="!isLoading" class="d-flex justify-content-center align-items-center car-admin-details">
    <div class="d-flex flex-column">
      <div class="d-flex flex-wrap justify-content-center container-img">
        <div v-if="editCar.pictures[0]">
          <img :src="editCar.pictures[0].url" class="img-car-details">
        </div>

      </div>

      <div class="d-flex justify-content-center car-admin-details-content">
        <div class="car-admin-details-text">
          <h3>{{editCar.model}}</h3>
          <p>Référence : {{editCar.reference}}</p>
          <p>Prix : {{editCar.price}}€</p>
          <p>Kilométrage : {{editCar.mileage}}km</p>
          <p>Carburant : {{editCar.fuel}}</p>
          <p>Année : {{new Date(editCar.circulationYear).getFullYear()}}</p>
        </div>
      </div>

      <div class="d-flex justify-content-center container-button">
        <button @click="onClickDelete" class="btn-delete">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, reactive} from "vue";
import {useCarAdminStore} from "@/stores/admin/carAdminStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";

const isLoading = ref(true)

const carAdminSTore = useCarAdminStore()
const { editCar } = storeToRefs(carAdminSTore)

const route = useRoute()

onMounted(async () => {
  await carAdminSTore.getCurrentCar(route.params.id)
  isLoading.value = false
})

const onClickDelete = async () => {
  await carAdminSTore.deleteCar(route.params.id)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.car-admin-details {
  padding: 20px 10px;
  height: calc(100vh - 630px);
}

// images

.container-img {
  gap: 15px;
  .img-car-details {
    object-fit: cover;
    height: 100%;
    max-height: 250px;
    max-width: 350px;
    width: 100%;
  }
}

// détails car

.car-admin-details-content {
  margin-top: 15px;
  .car-admin-details-text {
    text-align: center;
    background-color:#f1f2f6;
    width: 500px;
    padding: 20px 10px 10px 10px;
    @include m.lg {
      width: 100%;
      max-width: 500px;
    }
    h3 {
      font-size: 17px;
      text-transform: uppercase;
    }
    p {
      font-size: 14px;
    }
  }
}

// button

.container-button {
  margin-top: 10px;
  .btn-delete {
    cursor: pointer;
    color: var(--text-primary-color);
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 10px;
    font-size: 12px;
    background-color: #d63031;
  }
}
</style>

