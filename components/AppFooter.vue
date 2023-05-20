<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <h3>
      Мой сайт 2023 &copy;
    </h3>
  </footer>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-primary-gray;
    text-shadow: $color-primary-border;
    background: $color-primary-purple;
  }
</style>