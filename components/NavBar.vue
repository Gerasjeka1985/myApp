<script setup lang="ts">
    import {ref } from 'vue';
    import { onClickOutside } from '@vueuse/core';

    const isVisible = ref(false);
    const target = ref(null);

    const handler = () => isVisible.value = !isVisible.value;

    onClickOutside(target, () =>  isVisible.value ? isVisible.value = false : undefined);
    //основная ошибка привязывать через  ref @click  и  навигацию. Она есть изначально и все что надо
    // это лишь байндить класс visible
</script>

<template>
  <header class="header" ref="target">
    <burger-menu
        :class="{active: isVisible}"
        @click="handler"
    >
    </burger-menu>

    <div class="header__name">
      <h2 class="header__title">
        Герасимов
      </h2>
      <p class="header__sub-title">Евгений</p>
    </div>

    <nav
        :class="{visible: isVisible}"
         class="header__nv"
    >
      <ul class="header__block">
        <li class="header__elem">
          <NuxtLink
              to="/"
              class="header__lnk"
              exact active-class="active"
              @click="handler"
          >
            Главня
          </NuxtLink>
        </li>
        <li class="header__elem">
          <NuxtLink
              to="/about"
              class="header__lnk"
              active-class="active"
              @click="handler"
          >
            Обо мне
          </NuxtLink>
        </li>
        <li class="header__elem">
          <NuxtLink
              to="/projects"
              class="header__lnk"
              active-class="active"
              @click="handler"
          >
            Мои проекты
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

.active{
  // как сделать без !important ?
  color: orange !important;
}

.header{
  position: fixed;
  width: 100%;
  min-height: 60px;
  background: rgba(0,0,0,0);

  &__name{
    position: absolute;
    top: 10px;
    right: 30px;
    text-shadow: 4px 5px 4px black;
  }

  &__sub-title::before, &__sub-title::after{
    content: '-';
  }

  &__nv{
    position: absolute;
    top: -210px;
    width: 100%;
    height: 100%;
    transition: all 0.2s;

    &.visible{
      top: 0;
    }
  }

  &__block{
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: $color-primary-purple;
    outline: 1px solid black;
  }

  &__elem{list-style-type: none;}

  &__lnk{
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    font-weight: bolder;
    color: $color-primary-white;
    transition: ease-in 0.2s;
  }
}

@include breakpoint(large) {

  .header {
    width: 100%;
    min-height: 60px;
    transition: none;

    &__name{
      width: 200px;
      height: 60px;
      top: 10px;
      left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &__nv{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }

    &__block{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-evenly;
      background: rgba(0,0,0,0);
      outline: none;
    }
  }
}
</style>