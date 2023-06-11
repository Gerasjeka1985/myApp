<template>
  <div class="about">
    <h1 class="about__title">about Page</h1>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
.about{
  width: 100%;
  height: 100vh;
  padding-left: 10px;
  padding-top: 100px;

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