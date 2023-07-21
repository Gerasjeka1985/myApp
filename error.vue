<template>
  <div class="error">
    <h1>
      Это не верный путь, путник...
    </h1>
    <br />
    <NuxtLink to="/">Вернуться на главню страницу</NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.error{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>