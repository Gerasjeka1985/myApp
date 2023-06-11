<script setup lang="ts">

</script>

<template>
  <div class="ball">
    <div class="ball__elem1"></div>
    <div class="ball__elem2"></div>
    <div class="ball__elem3"></div>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .ball {
    position: relative;
    right: -500px;
    bottom: 100px;
    width: 200px;
    height: 200px;
    box-shadow: 2px 2px 3px black;
    border-radius: 50%;
    background: linear-gradient(blue, pink);
    animation: round 4s normal infinite;
    }


.ball__elem1, .ball__elem2, .ball__elem3, .ball__elem4, .ball__elem5 {
  position: absolute;
  width: 40px;
  height: 40px;
  box-shadow: 2px 2px 3px black;
  border-radius: 50%;
  background: linear-gradient(blue, pink);
}

.ball__elem1{
  top: 10px;
  left: -50px;
  animation: elem1 4s normal infinite;
}

.ball__elem2{
  top: -50px;
  left:35px;
  animation: elem2 4s normal infinite;
}

.ball__elem3{
  top: 10px;
  left: 120px;
  animation: elem2 4s normal infinite;
}


@keyframes round {
  100%{
    transform: rotate(360deg);
  }
}

@keyframes elem1 {
  10%{
    top: -50px;
  }
  40%{
    top: 120px;
  }
  60%{
    top: -10px;
  }
  80%{
    top: 120px;
  }
  100%{
    top: 10px;
  }
}

@keyframes elem2 {
  10% {
    top: -50px;
  }
  40%{
    top: 200px;
  }
  100%{
    top: -50px;
  }
}

@keyframes elem3 {
  10% {
    top: -50px;
  }
  40%{
    top: 200px;
  }
  100%{
    top: 10px;
    left: 120px;
  }
}
</style>