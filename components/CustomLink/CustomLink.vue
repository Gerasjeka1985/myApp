<script setup lang="ts">

</script>

<template>
  <nuxt-link class="link">
    <slot />
  </nuxt-link>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .link {
      width: 30px;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
      font-family: 'Josefin Sans', sans-serif;
      color: $color-primary-gray;
      text-shadow: $color-primary-border;
      cursor: pointer;
      text-decoration: none;
      transition: 0.5s ease;

      &:hover{
        color: $color-primary-white;
        font-size: 22px;
      }
    }
</style>