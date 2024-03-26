<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="cars">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-center">
            <button @click="onClickFiltersCars" type="button" class="btn-filter-car">Filtrer les véhicules</button>
          </div>
          <div class="filters-cars">
            <FiltersCars />
          </div>
        </div>

        <div class="d-flex justify-content-center container-car">
          <div class="card">
            <ul v-for="car in cars" :key="car.id" class="card-list">
              <li class="card-content">
                <img v-if="car.pictures[0]" :src="car.pictures[0]" class="img-car">
                <img v-else src="@/assets/images/photo5.jpg" class="img-car">
                <div class="card-text">
                  <h3>{{car.model}}</h3>
                  <p>Kilométrage: {{car.mileage}}km</p>
                  <p>Année: {{new Date(car.circulationYear).getFullYear()}}</p>
                  <div class="separator"></div>
                  <p class="price">Prix: {{car.price}}€</p>
                  <div class="d-flex justify-content-center">
                    <router-link :to="{name: 'car-details', params: {id: car.id}}">
                      <button class="btn-car-details">Détails</button>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import FiltersCars from "@/features/views/garage/cars/components/FiltersCars.vue";
import {useCarStore} from "@/stores/carStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import BaseTemplate from "@/BaseTemplate.vue";

const isLoading = ref(true)

const carStore = useCarStore()
const { cars } = storeToRefs(carStore)

onMounted(async () => {
  await carStore.getCars()
  isLoading.value = false
})

const onClickFiltersCars = async () => {
  await carStore.getCars()
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.cars {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 25px 40px;
  @include m.sm {
    padding: 20px 20px 5px 20px;
  }
}

.btn-filter-car {
  cursor: pointer;
  padding: 12px 14px;
  background-color: #0097e6;
  border-radius: 4px;
  color: white;
  border: 0;
}

.filters-cars {
  padding: 40px 0 30px 0;
  @include m.sm {
    padding: 30px 0 20px 0;
  }
}

.container-car {
  padding: 30px 0;
  @include m.lg {
    padding: 20px 0;
  }
  .card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    .card-list {
      margin: 0;
      padding: 0;
    }
  }
}

.card-content {
  border-radius: 6px;
  background-color: #f1f2f6;
  object-fit: cover;
  .img-car {
    border-radius: 6px 6px 0 0;
    object-fit: cover;
    height: 300px;
    @include m.sm {
      height: 100%;
      max-height: 300px;
      width: 100%;
    }
  }
}

.card-text {
  padding: 20px 10px 20px 10px;
  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
  }
  .separator {
    border-bottom: 1px solid black;
    width: 100%;
  }
  p {
    font-size: 13px;
  }
  .price {
    font-style: italic;
    font-size: 11px;
    font-weight: 500;
  }
  .btn-car-details {
    cursor: pointer;
    font-size: 12px;
    background-color: black;
    color: white;
    padding: 8px;
    border-radius: 4px;
  }
}
</style>