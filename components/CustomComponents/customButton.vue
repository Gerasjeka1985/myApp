<script setup lang="ts">

</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  button {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
    color: $color-primary-gray;
    text-shadow: $color-primary-border;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;
    padding: 5px 10px;

    &:hover{
      color: $color-primary-white;
      font-size: 22px;
    }
  }

  @include breakpoint(large) {

  }
</style>