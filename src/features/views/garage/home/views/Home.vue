<template>
  <BaseTemplate>
    <section class="d-flex justify-content-center align-items-center banner">
      <img src="../../../../../assets/images/banner.jpg" class="banner-img">
      <div class="banner-content">
        <h1 class="pb-20">Mécanique & Réparation & Entretien et révision</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <button class="btn-banner">Plus d'information</button>
      </div>
    </section>

    <section class="contact">
      <div class="px-10 container">
        <div class="d-flex align-items-center flex-row space-between contact-text">
          <h2>Vous avez une question</h2>
          <router-link :to="{name: 'contact'}">
            <button class="btn btn-contact">Contacter-nous</button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <div class="services-title">
          <h2>Pourquoi nous choisir?</h2>
          <div class="souligne"></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div class="services-elem">
          <div class="d-flex align-items-center flex-column services-text">
            <font-awesome-icon icon="fa-solid fa-message" />
            <h3>Des garages a votre écoute</h3>
            <div class="souligne"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div class="d-flex align-items-center flex-column services-text">
            <font-awesome-icon icon="fa-solid fa-car-side" />
            <h3>Mécanique toutes marques</h3>
            <div class="souligne"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
          <div class="d-flex align-items-center flex-column services-text">
            <font-awesome-icon icon="fa-solid fa-wrench" />
            <h3>Équipement moderne</h3>
            <div class="souligne"></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link :to="{name: 'cars'}">
          <button class="btn-used-car">Nos véhicules d'occasion</button>
        </router-link>
      </div>
    </section>

    <section class="show">
      <img src="../../../../../assets/images/pexels-cottonbro-studio-4488660.jpg" class="show-image">
      <div class="d-flex flex-column justify-content-center show-content">
        <div class="show-text">
          <h2>Véhicules toutes marques</h2>
          <div class="souligne"></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <nav class="d-flex align-items-center flex-row space-between show-list">
          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Renault
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Peugeot
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Citroen
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Volswagen
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Dacia
            </li>
          </ul>
          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Toyota
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Ford
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Opel
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Nissan
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Fiat
            </li>
          </ul>
          <ul>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Mercedes
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Audi
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              BMW
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Kia
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-check" />
              Hyundai
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <section class="interview">
      <div class="container">
        <div class="interview-title">
          <h2>Service automobile complet</h2>
          <div class="souligne"></div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <ul class="interview-list">
          <li class="interview-content">
            <img src="../../../../../assets/images/reparateur-automobile-utilisant-ordinateur-portable-lors-examen-moteur-voiture-dans-atelier.jpg" class="interview-img">
            <p>Diagnostique technique</p>
          </li>

          <li class="interview-content">
            <img src="../../../../../assets/images/oil-3979023_640.jpg" class="interview-img">
            <p>Entretien avec remise à zéro</p>
          </li>

          <li class="interview-content">
            <img src="../../../../../assets/images/pexels-artem-podrez-8985517.jpg" class="interview-img">
            <p>Mécanique générale</p>
          </li>
        </ul>
      </div>
    </section>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

// interview

.interview {
  padding: 70px 10px 60px 10px;
  @include m.md {
    padding: 50px 10px 30px 10px;
  }
  @include m.sm {
    padding: 50px 10px 20px 10px;
  }
  .container {
    display: block;
    max-width: 1400px;
    margin: auto;
  }
}

.interview-title {
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 30px;
    color: #777;
    @include m.md {
      font-size: 25px;
    }
    @include m.sm {
      font-size: 21px;
    }
  }
  .souligne {
    border-bottom: 3px solid #d63031;
    margin: 20px auto 30px auto;
    width: 90px;
  }
  p {
    font-weight: 300;
    color: #777;
    font-size: 19px;
    margin: 0 0 55px 0;
    @include m.md {
      margin: 0 0 45px 0;
      font-size: 16px;
    }
  }
}

.interview-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.interview-content {
  background-color: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  .interview-img {
    object-fit: cover;
    width: 100%;
    max-width: 430px;
    height: 330px;
    @include m.sm {
      height: 250px;
    }
  }
  p {
    margin: 0;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 15px 10px 15px 10px;
    text-align: center;
    @include m.md {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 15px;
    }
  }
}

// banner

.banner {
  position : relative;
}

.banner-img {
  position: relative;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  text-align: center;
  padding: 0 20px;
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    color: var(--text-primary-color);
    @include m.mac {
      font-size: 45px;
    }
    @include m.xxl {
      font-size: 35px;
    }
    @include m.lg {
      font-size: 35px;
    }
    @include m.md {
      font-size: 25px;
    }
    @include m.sm {
      font-size: 15px;
    }
  }
  p {
    font-weight: 200;
    font-size: 25px;
    color: var(--text-primary-color);
    @include m.md {
      display: none;
    }
  }
}

.btn-banner {
  border: 1px solid var(--text-primary-color);
  background-color: transparent;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  padding: 20px 30px;
  color: var(--text-primary-color);
  @include m.lg {
    font-size: 14px;
    padding: 15px 25px;
  }
  @include m.sm {
    padding: 12px;
    font-size: 10px;
  }
}

// contact

.contact {
  position: relative;
  background-color: #f1f2f6;
  padding: 55px 0;
  @include m.md {
    padding: 45px 0;
  }
  @include m.sm {
    padding: 35px 0;
  }
  .container {
    max-width: 1000px;
  }
}

.contact-text {
  @include m.md {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-weight: 300;
    text-transform: uppercase;
    @include m.md {
      font-size: 21px;
      margin-bottom: 22px;
    }
    @include m.sm {
      font-size: 17px;
      margin-bottom: 15px;
    }
  }
}

.btn-contact {
  padding: 22px 30px;
  font-size: 15px;
  letter-spacing: 1px;
  white-space: nowrap;
  background-color: #d63031;
  text-transform: uppercase;
  @include m.lg {
    font-size: 14px;
    padding: 20px 28px;
  }
  @include m.sm {
    padding: 14px;
    font-size: 10px;
  }
}

// services

.services {
  margin: 65px 10px;
  @include m.xxl {
    margin: 55px 10px;
  }
  @include m.lg {
    margin: 45px 10px;
  }
  @include m.sm {
    margin: 35px 10px;
  }
  .container {
    display: block;
    max-width: 1200px;
    margin: auto;
  }
}

.services-title {
  text-align: center;
  h2 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 35px;
    color: #777;
    letter-spacing: 1px;
    margin-bottom: 20px;
    @include m.xxl {
      font-size: 32px;
    }
    @include m.lg {
      font-size: 30px;
    }
    @include m.sm {
      font-size: 24px;
    }
  }
  .souligne {
    border-bottom: 2px solid #d63031;
    width: 80px;
    margin: auto;
  }
  p {
    font-size: 18px;
    margin-top: 30px;
    font-weight: 300;
    line-height: 28px;
    color: #777;
    @include m.sm {
      font-size: 16px;
    }
  }
}

.services-elem {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 30px;
  row-gap: 30px;
  @include m.md {
    margin-top: 40px;
    column-gap: 0;
    row-gap: 40px;
  }
  .fa-wrench, .fa-message, .fa-car-side {
    border: 1px solid #dfe4ea;
    padding: 40px;
    border-radius: 50%;
    font-size: 20px;
    color: #d63031;
    @include m.md {
      padding: 30px;
    }
    @include m.sm {
      padding: 25px;
    }
  }
  .services-text {
    text-align: center;
    h3 {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 18px;
      color: black;
      margin-top: 30px;
      @include m.md {
        margin-top: 20px;
      }
    }
    .souligne {
      border-bottom: 2px solid #d63031;
      margin: 20px 0;
      width: 40px;
    }
    p {
      font-size: 15px;
      color: #777;
      width: 100%;
      max-width: 350px;
      line-height: 25px;
      margin: 0;
    }
  }
}

.btn-used-car {
  margin-top: 40px;
  background-color: #d63031;
  color: var(--text-primary-color);
  text-transform: uppercase;
  padding: 20px 20px;
  font-size: 15px;
  letter-spacing: 1px;
  border: 0;
  @include m.lg {
    padding: 20px 20px;
    font-size: 13px;
  }
  @include m.sm {
    padding: 18px;
    font-size: 11px;
  }
}

// show

.show {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @include m.md {
    display: flex;
    flex-direction: column;
  }
  .show-image {
    object-fit: cover;
    height: 600px;
    width: 100%;
    @include m.md {
      height: 550px;
    }
    @include m.md {
      height: 450px;
    }
  }
  .show-content {
    height: 600px;
    background-color: #f1f2f6;
    padding: 0 40px;
    @include m.md {
      padding: 60px 20px 40px 20px;
      height: 350px;
    }
    @include m.sm {
      height: auto;
      padding: 50px 20px 20px 20px;
    }
  }
}

.show-text {
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 30px;
    color: #777;
    @include m.md {
      font-size: 25px;
    }
    @include m.sm {
      font-size: 21px;
    }
  }
  .souligne {
    border-bottom: 2px solid #d63031;
    margin: 20px auto 30px auto;
    width: 90px;
  }
  p {
    font-weight: 300;
    color: #777;
    font-size: 18px;
    margin: 0 0 25px 0;
    @include m.md {
      font-size: 16px;
    }
  }
}

.show-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 5px;
  li {
    color: #777;
    font-size: 15px;
    margin-bottom: 12px;
    @include m.md {
      font-size: 14px;
    }
    .fa-check {
      color: #d63031;
      margin-right: 10px;
    }
  }
}
</style>