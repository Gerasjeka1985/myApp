<template>
  <div class="bg">
    <NavBar></NavBar>
    <slot />
  </div>

</template>

<script setup>

</script>

<style scoped lang="scss">
  .bg {
    background-image: url('../assets/images/backg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>