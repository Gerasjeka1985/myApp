<template>
  <div class="main">
    <h1>
      Проектирование и дизайн сайтов.
    </h1>
    <p>
      Меня зовут Евгений, я frontend developer.
      <br />
      Я создаю адаптивные сайты. Работаю с анимацией
    </p>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .main{
    width: 100%;
    height: 100vh;
    padding-left: 10px;
    padding-top: 100px;

    h1 {padding-top: 120px;}

    p{
      font-size: 18px;
      padding-top: 20px
    }
  }

@include breakpoint(large) {
  .main {
    padding-top: 300px;
    padding-left: 150px;
  }
}
</style>