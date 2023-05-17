<template>
  <nav class="menu">
    <ul class="menu__block">
      <li class="menu__elem">
        <NuxtLink class="menu__lnk" to="/">
          Главня
        </NuxtLink>
      </li>
      <li class="menu__elem">
        <NuxtLink class="menu__lnk" to="/about">
          Обо мне
        </NuxtLink>
      </li>
      <li class="menu__elem">
        <NuxtLink class="menu__lnk" to="/projects">
          Мои проекты
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .menu {
    width: 100%;
    height: 55px;
    background: none;

    &__elem{
      list-style-type: none;
    }

    &__lnk{
      text-decoration: none;
      font-size: 18px;
      font-weight: bolder;
      color: black;
    }
  }
@include breakpoint(large) {
  .menu {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;

    &__block{
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
}
</style>