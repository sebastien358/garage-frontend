<template>
  <teleport to="body">
    <div v-if="open" class="calc-delete">
      <form>
        <p>Voulez-vous vraiment supprimer cet élément ?</p>
        <div class="container-button">
          <button @click="emit('close')" class="btn btn-ok">Annuler</button>
          <button @click="emit('onClickDelete', id)" class="btn btn-delete">Ok</button>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
  id: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'onClickDelete'): void
}>()
</script>

<style scoped lang="scss">
.calc-delete {
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.70);
}

form {
  background-color: white;
  border-radius: 0;
  padding: 20px;
  p {
    text-align: center;
    font-size: 14px;
  }
}

.container-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.btn {
  font-size: 13px;
  padding: 8px 12px;
  border: 0;
  color: white;
  &-delete {
    background-color: red;
  }
  &-ok {
    background-color: #636e72;
  }
}
</style>

