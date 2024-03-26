<template>
  <teleport to="body">
    <div v-if="state.open" class="calc-delete">
      <form>
        <p>Voulez-vous vraiment supprimer cet élément ?</p>
        <div class="container-button">
          <button @click="emit('close')" class="btn btn-ok">Annuler</button>
          <button @click="emit('onClickDelete', state.id)" class="btn btn-delete">Ok</button>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const state = defineProps<{
  open: boolean
  id: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'OnClickDelete'): void
}>()
</script>

<style scoped lang="scss">
.calc-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.50);
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

