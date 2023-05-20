<script setup lang="ts">

</script>

<template>
  <ul class="menu">
    <li class="menu__elem">
      <NuxtLink
          to="/"
          class="menu__lnk"
          exact active-class="active"
      >
        Главня
      </NuxtLink>
    </li>
    <li class="menu__elem">
      <NuxtLink
          to="/about"
          class="menu__lnk"
          active-class="active"
      >
        Обо мне
      </NuxtLink>
    </li>
    <li class="menu__elem">
      <NuxtLink
          to="/projects"
          class="menu__lnk"
          active-class="active"
      >
        Мои проекты
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.active{
  // как сделать без !important ?
  color: orange !important;
}

  .menu {
    display: none;

    &__elem {
      list-style-type: none;
    }

    &__lnk {
      text-decoration: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: bolder;
      color: $color-primary-gray;
      text-shadow: $color-primary-border;
      transition: ease-in 0.2s;
    }
  }
@include breakpoint(large) {

    .menu{
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      margin: auto;

      &__elem {
        width: 18%;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__lnk {

        &:hover {
          font-size: 25px;
        }
      }
    }
}
</style>