<template>
  <div>
    <router-link class="link-breadcrumb" to="/">
      <small>Home page / </small>
    </router-link>
    <router-link class="link-breadcrumb" to="/todos">
      <small>Todos page / </small>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Breadcrumb"
  }
</script>

<style scoped lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .link-breadcrumb {
    margin-right: 1rem;
  }

  small {
    color: var(--color-yellow-green);
    font-weight: bold;
  }
</style>
