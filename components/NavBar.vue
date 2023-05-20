<template>

  <header class="head">
    <burger-menu class="head__bg" />
    <nav class="head__nv">
      <ul class="head__block">
        <li class="head__elem">
          <NuxtLink
              to="/"
              class="head__lnk"
              exact active-class="active"
          >
            Главня
          </NuxtLink>
        </li>
        <li class="head__elem">
          <NuxtLink
              to="/about"
              class="head__lnk"
              active-class="active"
          >
            Обо мне
          </NuxtLink>
        </li>
        <li class="head__elem">
          <NuxtLink
              to="/projects"
              class="head__lnk"
              active-class="active"
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

  .head{
    width: 100%;
    height: 60px;
    background: none;

    &__nv{
      width: 100%;
      height: 100%;
      background: yellowgreen;
    }

    &__block{width: 100%;}
    &__elem{list-style-type: none;}

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

  .head {

    &__nv {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
    }

    &__block {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

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