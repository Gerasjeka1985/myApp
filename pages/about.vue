<template>
  <div class="about">
    <h1 class="about__title">Контакты :</h1>
    <ul>
      <li class="about__elem">
        <NuxtLink class="about__lnk" target="_blank" to="https://m.vk.com/id215506143">
          Моя страничка в ВК
        </NuxtLink>
      </li>
      <li class="about__elem">
        <NuxtLink class="about__lnk" target="_blank" to="https://t.me/Jeka1985geras">
          Мой телеграмм
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.about{
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
  .about {padding-left: 50px;}
}
</style>