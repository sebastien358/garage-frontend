<template>
  <BaseTemplate>
    <div class="px-10 d-flex justify-content-center align-items-center login">
      <form>
        <h3>Se connecter</h3>
        <div class="input-group">
          <input type="text" placeholder="Entrer un email">
        </div>
        <div class="input-group">
          <input type="text" placeholder="Entrer un mot de passe">
        </div>
        <div class="input-group">
          <a href="#" class="forgot-password">Mot de passe oublié?</a>
        </div>
        <div class="d-flex flex-column container-button">
          <button type="submit" class="btn btn-login">Connexion</button>
        </div>
        <div class="d-flex justify-content-center account">
          <span class="text-align-center">
            je n'ai pas de compte?
            <router-link :to="{name: 'register'}" class="link">Inscription</router-link>
          </span>
        </div>
      </form>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.login {
  height: 100%;
  @include m.md {
    height: initial;
    padding: 20px;
  }
}

@include m.md {
   form {
     max-width: 350px;
   }
}

.forgot-password {
  font-size: 13px;
  color: var(--gray-3);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>