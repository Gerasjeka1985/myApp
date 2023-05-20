<script setup lang="ts">
  import {onMounted,ref} from 'vue';

  const isFullScreen = ref(false);

  //onMounted отслеживает,если mobile version => isActive = false для вида бургера
  //Пока бургер меню не добавлено все работает
  onMounted(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth < 1200){
        isFullScreen.value = false;
      }
      else{
        isFullScreen.value = true;
      }
    })
  });
</script>

<template>
  <nav class="menu" v-if="isFullScreen">
    <ul class="menu__block">
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
  </nav>

  <nav class="menu" v-else>
      <ul class="menu__block">
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
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.active{
  // как сделать без !important ?
  color: orange !important;
}

  .menu {
    width: 100%;
    height: 55px;
    background: none;

    &__block{
      width: 100%;
    }

    &__elem{
      list-style-type: none;
    }

    &__lnk{
      text-decoration: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: bolder;
      color: black;
      transition: ease-in 0.2s;
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
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    &__elem{
      width: 18%;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__lnk{

      &:hover{
        font-size: 25px;
      }
    }
  }
}
</style>