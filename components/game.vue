<script setup lang="ts">
  import {ref} from 'vue';

  const positionX = ref(100);
  const  positionY = ref(300);

const fire = () => {
  positionX.value += (70 ** 2 * (2 * Math.sin(45))) / 10;
  // positionY.value -= 120 * Math.sin(45) / 10

  setTimeout(() => {
    positionY.value -= 1420 * Math.sin(90) / 10
  }, 100)
}
  //Дальность полета снряда  l = (v ** 2 * sin2a) / g
  //Время подьема снаряда в верхнюю точку  t = v * sinA / g

</script>

<template>
  <div class="game">
    <button @click="fire">Огонь</button>
    <div :style="{left: positionX + 'px', top:positionY + 'px'}" class="yellow"></div>
  </div>

</template>


<style scoped lang="scss">
@import "assets/scss/_global.scss";
.game{
  position: relative;

  .yellow{
    z-index: 50;
    position: absolute;
    top: 300px;
    left: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: yellow;
    transition: all 1s;
  }

  //.yellow::before, .yellow::after {
  //  content: '';
  //  position: fixed;
  //  width: 20px;
  //  height: 20px;
  //  border-radius: 50%;
  //  background: black;
  //  top: 450px;
  //  left: 120px;
  //  animation: eye 3s ease-in-out infinite;
  //}
  //
  //.creature::before { left: 55px; }
  //.creature::after { right: 55px; }
  //@keyframes eye {
  //  90% { transform: none; }
  //  95% { transform: scaleY(0.1); }
  //}
}


</style>