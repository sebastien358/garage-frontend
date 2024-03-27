<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="d-flex justify-content-center align-items-center cars-create">
      <form @submit.prevent="onSubmit">
        <h3>Ajout véhicule</h3>
        <div class="input-group">
          <input
            v-model="editCar.model"
            placeholder="Model"
            type="text"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editCar.reference"
            placeholder="Reférence"
            type="text"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editCar.price"
            placeholder="Prix"
            type="number"
            maxlength="255"
            required
          >
        </div>
        <div class="input-group">
          <input
            v-model="editCar.circulationYear"
            placeholder="Année"
            type="date"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group">
          <select v-model="editCar.fuel" name="fuel" id="fuel">
            <option value="">--Please choose an option--</option>
            <option value="diesel">Diesel</option>
            <option value="essence">Essence</option>
            <option value="electric">Electrique</option>
          </select>
        </div>
        <div class="input-group">
          <input
            v-model="editCar.mileage"
            placeholder="Kilométrage"
            type="number"
            minlength="6"
            maxlength="50"
            required
          >
        </div>
        <div class="input-group-file">
          <label for="file">Images</label>
          <input
            @change="onClickInputFilesChange"
            ref="inputFiles"
            type="file"
            multiple
          >
        </div>
        <div class="d-flex flex-column container-button">
          <button type="submit" class="btn-profile">Ajouter</button>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useCarAdminStore} from "@/stores/admin/carAdminStore";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const carAdminStore = useCarAdminStore()
const { editCar } = storeToRefs(carAdminStore)

onMounted(async () => {
  await carAdminStore.initCar()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await carAdminStore.createCar(pictures.value)
  await router.push({name: 'admin-cars-list'})
}

const onClickInputFilesChange = () => {
  pictures.value = inputFiles.value.files
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.cars-create {
  height: calc(100vh - 630px);
  @include m.lg {
    padding: 20px 0;
  }
}

form {
  max-width: 400px;
  padding: 30px 20px 30px 20px;
  @include m.lg {
    padding: 20px;
    max-width: 380px;
  }
  h3 {
    font-size: 20px;
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

.input-group-file {
  label {
    font-size: 14px;
    margin-right: 5px;
  }
  margin: 12px 0;
  input[type="file"] {
    border: 0;
  }
}
</style>