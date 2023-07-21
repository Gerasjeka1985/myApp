<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import { onClickOutside } from '@vueuse/core'

  const target = ref(null)

  const isVisible = ref(false); //отвесает за видимость навигации при клике по бургер меню

  const isActive = ref(false); //для смены класса burger-menu__button

  const burgerHandler = () => {
    isVisible.value = !isVisible.value
    isActive.value = !isActive.value;
  }

  onClickOutside(target, () => { //установлен пакет специально для клика вне элимента
        if(isVisible.value == true ){
          isVisible.value = false;
          isActive.value = false;
        }
      }
  )

  const navHandler = () => { //убирает вертикальную навигацию по клику подмен
    if(isVisible.value == true ){
      isVisible.value = false;
      isActive.value = false;
    }
  }

  //onMounted отслеживает,если mobile version => isActive = false для вида бургера
  onMounted(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth < 1200){
        isActive.value = false;
      }
      else{
        isVisible.value = false;
      }
    })
  });

</script>

<template>
  <header class="header">
    <nav-list
        ref="target"
        @click="navHandler"
        v-bind:class="{visible : isVisible}"
    />
    <burger-menu
        class="header__burger"
        @click="burgerHandler"
        v-bind:class="{active : isVisible}"
    />
  </header>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';

  .visible{
    z-index: 22;
    background-color: rgba(0,0,0,0);
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    width: 200px;
    min-height: 230px;
  }

  .active{
    position: fixed;
    display: flex;
    width: 200px;
    min-height: 230px;
    background: $color-primary-purple;
    border-radius: 0 0px 10px 0;
    transition: all 0.2s ease-out;
  }

  .header{
    width: 100%;
    height: 70px;
    background: $color-primary-purple;

    &__btn{
      position: absolute;
      top: 20px;
      right: 8%;
    }
  }
@include breakpoint(large) {
  .header {
    width: 100%;
    height: 70px;
    position: relative;

    &__btn {right: 100px;}
  }
}
</style>