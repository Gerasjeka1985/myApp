<script setup lang="ts">

</script>

<template>
 <div class="burger-menu">
   <NuxtLink class="burger-menu__button">
     <span class="burger-menu__lines"></span>
   </NuxtLink>
 </div>
</template>

<style scoped lang="scss">
  @import 'assets/scss/_global.scss';

  // class to toggle burger-menu
  //во внешнем элименте добавь active class
    .active span:before {transform: rotate(45deg);}

    .active span {height: 0;}

    .active span:after {transform: rotate(-45deg);}
  //-------------------------->

  .burger-menu{
    display: contents; //любопытное свойство
    width: 60px;
    height: 60px;

    &__button{
      z-index: 12;
      position: fixed;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0,0,0,0);
    }

    &__lines,
    &__lines:before,
    &__lines:after {
      z-index: 30;
      position: absolute;
      top: 50%;  margin-top: -1px;
      left: 50%; margin-left: -15px;
      width: 30px;
      height: 3px;
      background-color: orange;
      transition: 0.2s;
    }

    &__lines:before,
    &__lines:after{
      content: "";
    }

    &__lines:before {transform: translateY(-10px);}

    &__lines:after {transform: translateY(8px);}
  }

  @include breakpoint(large) {
    .burger-menu {display: none;}
  }
</style>