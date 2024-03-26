<template>
  <div class="d-flex flex-wrap align-items-center justify-content-center container-inputs-range">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-end">
        <button @click="filtersCars.mileage = 0" class="btn-reset">reset</button>
      </div>
      <input v-model="filtersCars.mileage" type="range" min="0" max="400000" step="10000">
      <div id="h4-container"><div id="h4-subcontainer"><h4>{{filtersCars.mileage}}<span></span></h4></div></div>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-end">
        <button @click="filtersCars.price = 0" class="btn-reset">reset</button>
      </div>
      <input v-model="filtersCars.price" type="range" min="0" max="100000" step="1000">
      <div id="h4-container"><div id="h4-subcontainer"><h4>{{filtersCars.price}}<span></span></h4></div></div>
    </div>
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-end">
        <button @click="filtersCars.circulationYear = '0'" class="btn-reset">reset</button>
      </div>
      <input  v-model="filtersCars.circulationYear" type="range" min="1960" max="2030" step="1">
      <div id="h4-container"><div id="h4-subcontainer"><h4>{{filtersCars.circulationYear}}<span></span></h4></div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCarStore} from "@/stores/carStore";
import {storeToRefs} from "pinia";

const carStore = useCarStore()
const { filtersCars } = storeToRefs(carStore)
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as m;

.container-inputs-range {
  gap: 40px;
}

.btn-reset {
  cursor: pointer;
  margin-bottom: 4px;
  font-size: 12px;
  background-color: #636e72;
  border-radius: 4px;
  padding: 4px 10px;
  color: white;
  position: relative;
  right: 3px;
}

input[type="range"] {
  outline: 0;
  border: 0;
  border-radius: 500px;
  width: 360px;
  transition: box-shadow 0.2s ease-in-out;
  @include m.sm {
    width: 300px;
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    & {
      overflow: hidden;
      height: 15px;
      -webkit-appearance: none;
      background-color: #ddd;
      @include m.sm {
        height: 12px;
      }
    }
    &::-webkit-slider-runnable-track {
      height: 15px;
      -webkit-appearance: none;
      color: #444;
      transition: box-shadow 0.2s ease-in-out;
      @include m.sm {
        height: 12px;
      }
    }
    &::-webkit-slider-thumb {
      cursor: pointer;
      -webkit-appearance: none;
      width: 15px;
      height: 15px;
      background: #fff;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 40px #1597ff;
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out;
      padding: 4px;
      @include m.sm {
        width: 12px;
        height: 12px;
      }
    }
    &:active::-webkit-slider-thumb {
      background: #fff;
      box-shadow: -340px 0 0 320px #1597ff, inset 0 0 0 3px #1597ff;
    }
  }
  // Firefox
  &::-moz-range-progress {
    background-color: #43e5f7;
  }
  &::-moz-range-track {
    background-color: #9a905d;
  }
  // IE
  &::-ms-fill-lower {
    background-color: #43e5f7;
  }
  &::-ms-fill-upper {
    background-color: #9a905d;
  }
}

#h4-container {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  @include m.sm {
    width: 280px;
  }
  #h4-subcontainer {
    width: 100%;
    position: relative;
    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      width: 40px;
      height: 40px;
      color: #fff !important;
      font-size: 12px;
      transform-origin: center -10px;
      transform: translateX(-50%);
      transition: margin-top 0.15s ease-in-out,
      opacity 0.15s ease-in-out;
      span {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #1597ff;
        border-radius: 0 50% 50% 50%;
        transform: rotate(45deg);
        z-index: -1;
      }
    }
  }
}

input:not(:active) + #h4-container h4 {
  opacity: 0;
  margin-top: -50px;
  pointer-events: none;
}
</style>