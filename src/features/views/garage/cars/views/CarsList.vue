<template>
  <BaseTemplate>
    <div class="cars">
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
          <CarItem />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import FiltersCars from "@/features/views/garage/cars/components/FiltersCars.vue";
import BaseTemplate from "@/BaseTemplate.vue";
import CarItem from "@/features/views/garage/cars/components/CarItem.vue";
import {useCarStore} from "@/stores/carStore";

const carStore = useCarStore()

const onClickFiltersCars = async () => {
  await carStore.getCars()
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.container-car {
  padding: 30px 0;
  @include m.lg {
    padding: 20px 0;
  }
}

.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  .card-list {
    width: 100%;
    max-width: 380px;
    margin: 0;
    padding: 0;
  }
}

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
  padding: 15px 10px 15px 10px;
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