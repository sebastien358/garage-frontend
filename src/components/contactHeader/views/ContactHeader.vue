<template>
  <div class="d-flex align-items-center contact-header">
    <div class="px-10 container">
      <div class="d-flex align-items-center flex-row space-between">
        <div class="d-flex align-items-center flex-row contact-header-elem">
          <p>06 04 42 34 56</p>
          <div class="separator"></div>
          <p>sebastienpetit27330@gmail.com</p>
          <div class="separator"></div>
          <p>Ouvert du Lundi au Vendredi, de 8h30 à 12h00 et de 14h00 à 18h30</p>
        </div>
        <div class="d-flex align-items-center facebook">
          <div class="separator"></div>
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
          <div class="separator"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.contact-header {
  background-color: #f1f2f6;
}

.contact-header-elem {
  column-gap: 20px;
  p {
    color: #777;
    font-size: 14px;
    @include m.lg {
      font-size: 13px;
    }
  }
}

.facebook {
  column-gap: 20px;
  .fa-facebook-f {
    cursor: pointer;
    font-size: 16px;
    color: #777;
    @include m.lg {
      font-size: 15px;
    }
  }
}

.separator {
  border-right: 1px solid #dedede;
  height: 50px;
}
</style>
