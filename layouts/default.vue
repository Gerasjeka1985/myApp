<template>
  <div class="bg">
    <NavBar></NavBar>
    <slot />
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .bg {
    //background-image: url('../assets/images/backg.webp');
    //background-position: center;
    //background-size: cover;
    //background-repeat: no-repeat;
    background: $color-primary-purple;
  }
</style>