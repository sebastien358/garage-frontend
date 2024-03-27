<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="container">
      <div class="car-details">
        <div class="d-flex flex-wrap justify-content-center container-img">
          <div v-if="editCar.pictures[0]">
            <img :src="editCar.pictures[0].url" class="img-car-details">
          </div>
          <div v-else>
            <img src="@/assets/images/photo5.jpg" class="img-car-details">
          </div>
        </div>

        <div class="d-flex justify-content-center car-details-content">
          <div class="car-details-text">
            <h3>{{editCar.model}}</h3>
            <p>Référence : {{editCar.reference}}</p>
            <p>Prix : {{editCar.price}}€</p>
            <p>Kilométrage : {{editCar.mileage}}km</p>
            <p>Carburant : {{editCar.fuel}}</p>
            <p>Année : {{new Date(editCar.circulationYear).getFullYear()}}</p>
          </div>
        </div>

        <div class="d-flex justify-content-center container-form">
          <form @submit.prevent="onSubmit">
            <h3>Contacter le garage</h3>
            <div class="input-group">
              <input
                :value="editContact.reference = editCar.reference"
                type="text"
                minlength="6"
                maxlength="50"
                required
                disabled
              >
            </div>
            <div class="input-group">
              <input
                v-model="editContact.firstName"
                placeholder="Prénom"
                type="text"
                minlength="3"
                maxlength="128"
                required
              >
            </div>
            <div class="input-group">
              <input
                v-model="editContact.lastName"
                placeholder="Nom"
                type="text"
                minlength="3"
                maxlength="128"
                required
              >
            </div>
            <div class="input-group">
              <input
                v-model="editContact.email"
                placeholder="Email"
                type="email"
                maxlength="255"
                required
              >
            </div>

            <div class="input-group">
              <input
                v-model="editContact.tel"
                placeholder="Téléphone"
                type="tel"
                maxlength="30"
                required
              >
            </div>
            <div class="input-group">
              <textarea
                v-model="editContact.message"
                placeholder="Message"
                rows="6"
                required
              ></textarea>
            </div>
            <div class="container-button">
              <button
                type="submit"
                class="btn-contact"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useCarStore} from "@/stores/carStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useContactStore} from "@/stores/contactStore";

const isLoading = ref(true)

const carStore = useCarStore()
const {editCar} = storeToRefs(carStore)

const contactStore = useContactStore()
const { editContact } = storeToRefs(contactStore)

const route = useRoute()

onMounted(async () => {
  await carStore.getCurrentCar(route.params.id)
  await contactStore.initContact()
  isLoading.value = false
})

const onSubmit = async () => {
  await contactStore.contactCreate(route.params.id)
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.car-details {
  padding: 20px 10px;
}

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

.car-details-content {
  margin-top: 15px;
  .car-details-text {
    text-align: center;
    background-color:#f1f2f6;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    h3 {
      //color: white;
      font-size: 17px;
      text-transform: uppercase;
    }
    p {
      //color: white;
      font-size: 14px;
    }
  }
}

//form

.container-form {
  margin-top: 20px;
}

form {
  background-color: #f1f2f6;
  max-width: 550px;
  padding: 30px 20px 30px 20px;
  @include m.lg {
    padding: 20px;
    max-width: 340px;
  }
  h3 {
    font-size: 20px;
  }
}

.input-group {
  input {
    padding: 12px;
  }
  textarea {
    padding: 12px;
  }
  input:disabled {
    background-color: #dfe4ea;
    color: #01a3a4;
  }
}

.container-button {
  margin-top: 5px;
  .btn-contact {
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