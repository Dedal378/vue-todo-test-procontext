<template>
  <div>
    <Breadcrumb />
    <p>Добро пожаловать в Приложение TODO APP. Эта страница с роутингом</p>
    <router-link class="open" to="/todos">ОТКРЫТЬ</router-link>
  </div>
</template>

<script>
  export default {
    name: "Home",
  }
</script>

<style scoped lang="scss">
  div {
    width: 100%;
  }

  p {
    max-width: 50rem;
    margin-bottom: 3rem;
  }

  .open {
    font-size: 2.5rem;
    font-weight: bold;
  }
</style>
