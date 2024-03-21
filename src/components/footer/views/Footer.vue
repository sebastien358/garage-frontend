<template>
  <footer>
    <div class="container">
      <ul class="services">
        <li class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          <div class="d-flex flex-column">
            <span>Rue Val Ferrant</span>
            <span>27330 Bois-Anzeray</span>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-phone" />
          <div class="d-flex flex-column">
            <span>Nous Contacter</span>
            <span>06 04 42 34 56</span>
          </div>
        </li>
        <li class="d-flex align-items-center">
          <div>
            <font-awesome-icon icon="fa-solid fa-location-dot" />
          </div>

          <div class="d-flex flex-column">
            <span>Assistance Dépannage</span>
            <span>06 04 42 34 56</span>
          </div>
        </li>
      </ul>

      <div class="souligne"></div>

      <section class="footer-list">
        <ul class="footer-content">
          <h3>À propos</h3>
          <div class="separator"></div>
          <li>Garage Petit</li>
          <li>11 Rue Du Val Ferrant</li>
          <li>27330 Bois-Anzeray</li>
          <li>Assistance: 06 04 42 34 56</li>
          <li>Mobile: 06 04 42 34 56</li>
          <li>Email: Par Email</li>
          <li>
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </li>
        </ul>

        <ul class="footer-content">
          <h3>Nos Sevices</h3>
          <div class="separator"></div>
          <li>Mécanique générale</li>
          <li>Vente Véhicules d’Occasion</li>
          <li>Entretien avec remise à zéro</li>
          <li>Diagnostique Technique</li>
          <li>Pneumatiques</li>
          <li>Service carte grise</li>
          <li>Véhicule de courtoisie</li>
        </ul>

        <ul class="footer-content">
          <h3>Horraires</h3>
          <div class="separator"></div>
          <li>Lundi: 08:30-12:00 - 14:00-18:30</li>
          <li>Mardi: 08:30-12:00 - 14:00-18:30</li>
          <li>Mercredi: 08:30-12:00 - 14:00-18:30</li>
          <li>Jeudi: 08:30-12:00 - 14:00-18:30</li>
          <li>Vendredi: 08:30-12:00 - 14:00-18:30</li>
          <li>Samedi: Fermé</li>
          <li>Dimanche: Fermé</li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

footer {
  background: black;
  padding: 30px 20px;
  @include m.sm {
    padding: 20px 10px;
  }
}

.services {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 80px;
  row-gap: 30px;
  @include m.md {
    flex-direction: column;
    align-items: initial;
    column-gap: 0;
  }
  li {
    gap: 20px;
    .fa-location-dot {
      color: var(--text-primary-color);
      font-size: 40px;
      @include m.md {
        font-size: 36px;
      }
      @include m.sm {
        font-size: 32px;
      }
    }
    .fa-phone {
      color: var(--text-primary-color);
      font-size: 32px;
      @include m.md {
        font-size: 28px;
      }
      @include m.sm {
        font-size: 24px;
      }
    }
  }
  span:nth-child(1) {
    margin-bottom: 8px;
  }
  span {
    font-weight: 300;
    font-size: 22px;
    color: var(--text-primary-color);
    @include m.md {
      font-size: 20px;
    }
    @include m.md {
      font-size: 18px;
    }
  }
}

.souligne {
  border-bottom: 1px solid #777;
  margin: 50px 0 50px 0;
  @include m.sm {
    margin: 40px 0 30px 0;
  }
}

.footer-list {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @include m.md {
    flex-direction: column;
    justify-content: start;
    row-gap: 18px;
  }
}

.footer-content {
  color: var(--text-primary-color);
  margin: 0;
  h3 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    @include m.md {
      font-size: 15px;
    }
    @include m.sm {
      margin-bottom: 9px;
    }
  }
  .separator {
    border-bottom: 2px solid white;
    margin-bottom: 20px;
    width: 35px;
    @include m.sm {
      margin-bottom: 15px;
    }
  }
  li {
    font-size: 15px;
    color: var(--text-primary-color);
    margin-bottom: 10px;
    @include m.sm {
      font-size: 13px;
    }
    .fa-facebook-f {
      font-weight: 100;
      font-size: 12px;
      color: var(--text-primary-color);
      border: 1px solid white;
      padding: 15px 20px;
      @include m.md {
        padding: 10px 15px;
      }
    }
  }
}
</style>

<script setup lang="ts">
</script>