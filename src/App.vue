<!--suppress ALL -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>My Todo App On Vue</h1>
    <hr>
    <Breadcrumb />
    <hr>
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
  #app {
    width: clamp(320px, 100vw, 1200px);
    margin: 0 auto;
    color: var(--color-grey-blue);
    text-align: center;

    img {
      margin: 0 auto;
      width: 150px;
      &:hover {
        transform: rotateY(180deg);
      }
    }

    h1 {
      //noinspection CssInvalidFunction
      font-size: clamp(0.8rem, 7vw, 3rem);
      margin-bottom: 3rem;
    }

    hr {
      width: 99%;
      color: var(--color-green);
    }
  }
</style>
