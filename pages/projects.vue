<template>
  <div class="proj">
    <h1 class="proj__title">Мои проекты : </h1>
    <ul>
      <li class="proj__elem">
        <NuxtLink class="proj__lnk" target="_blank" to="https://my-vocal.website/">Сайт визитка</NuxtLink>
      </li>
      <li class="proj__elem">
        <NuxtLink class="proj__lnk" target="_blank" to="http://test-market.site/">Сайт с блогами</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.proj{
  width: 100%;
  height: 100vh;
  padding-left: 10px;

  &__title {padding-top: 100px;}

  &__elem {
    margin-top: 10px;
    list-style-type: none;
  }

  &__lnk{
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bolder;
    color: $color-primary-white;
    transition: ease-in 0.2s;

    &:hover{
      color: orange;
    }
  }
}
@include breakpoint(large) {
  .proj {padding-left: 50px;}
}
</style>