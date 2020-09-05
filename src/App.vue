<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>My Todo App On Vue</h1>
    <hr>
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
    color: var(--color-grey-blue);
    text-align: center;
  }

  img {
    width: 150px;
  }

  h1 {
    margin-bottom: 3rem;
  }

  hr {
    width: 100%;
    color: var(--color-green);
  }
</style>
