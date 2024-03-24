<template>
  <BaseTemplate>
    <div class="used-cars">
      <div class="d-flex flex-column">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-center">
            <button class="btn-filter-car">Filtrer les véhicules</button>
          </div>
          <div class="filters-cars">
            <FiltersCars />
          </div>
        </div>

        <div class="card">
          <ul class="card-list">
            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>

            <li class="card-content">
              <img src="@/assets/images/photo5.jpg">
              <div class="card-text">
                <h3>ddd</h3>
                <p>ddd</p>
                <p>dd</p>
                <div class="separator"></div>
                <p>ddd</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import FiltersCars from "@/features/views/garage/cars/components/FiltersCars.vue";
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.used-cars {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 25px 20px;
  @include m.sm {
    padding: 20px 20px 5px 20px;
  }
}

.btn-filter-car {
  cursor: pointer;
  padding: 12px 14px;
  background-color: #00a8ff;
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

.card {
  .card-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 18px;
    @include m.mac {
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
    @include m.xxl {
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    @include m.xl {
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
    }
    @include m.lg {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    @include m.md {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    @include m.sm {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
    }
  }
}

.card-content {
  border-radius: 6px;
  background-color: #f1f2f6;
  img {
    border-radius: 6px 6px 0 0;
  }
}

.card-text {
  padding: 10px 10px 0 10px;
  h3 {
    font-size: 16px;
  }
  .separator {
    border-bottom: 1px solid black;
    width: 100%;
  }
  p {
    font-size: 14px;
  }
}
</style>