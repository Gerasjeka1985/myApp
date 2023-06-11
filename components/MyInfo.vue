<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="social">
      <li class="social__elem">
        <NuxtLink
            class="social__lnk"
            to="tel:+79295300951"
        >
          <Icon class="social__icon" icon="solar:phone-linear" />
        </NuxtLink>
      </li>
      <li class="social__elem">
        <NuxtLink
            class="social__lnk"
            to="https://wa.me/79295300951"
        >
          <Icon class="social__icon" icon="uim:whatsapp" />
        </NuxtLink>
      </li>
      <li class="social__elem">
        <NuxtLink
            class="social__lnk"
            to="https://m.vk.com/id215506143"
        >
          <Icon class="social__icon" icon="simple-line-icons:social-vkontakte" />
        </NuxtLink>
      </li>
      <li class="social__elem">
        <NuxtLink
            class="social__lnk"
            to="https://t.me/Jeka1985geras"
        >
          <Icon class="social__icon" icon="la:telegram" />
        </NuxtLink>
      </li>
      <li class="social__elem">
        <NuxtLink
            class="social__lnk"
            to="mailto:gekgrom@mail.ru"
        >
          <Icon class="social__icon" icon="ci:mail" />
        </NuxtLink>
      </li>
  </nav>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.social{
  position: absolute;
  top: 70px;
  right: 20px;
  width: 250px;
  height: 55px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__elem {list-style-type: none;}

  &__lnk {
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

  &__icon{
    width: 35px;
    height: 35px;
    border-radius: 20%;
    box-shadow: 2px 3px 4px black;
  }
}
@include breakpoint(large) {
  .social{
    top: 100px;
    left: 30px;
  }
}
</style>