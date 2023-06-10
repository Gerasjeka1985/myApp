<template>
  <div class="main">
    <h1>
      Герасимов Евгений Анатольевич
      <br />
      <p>frontend developer</p>
    </h1>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/scss/_global.scss';
  .main{
    width: 100%;
    height: 100vh;
    padding-left: 10px;

    h1{
      padding-top: 100px;
    }
  }

@include breakpoint(large) {
  .main {padding-left: 50px;}
}
</style>