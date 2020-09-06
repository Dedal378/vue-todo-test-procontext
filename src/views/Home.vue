<template>
  <div>
    <p>Добро пожаловать в Приложение TODO APP.</p>
    <p>Создайте или отредактируйте свою заметку, нажав кнопку внизу.</p>
    <button class="btn">
      <router-link class="open" to="/todos">TODO APP</router-link>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    max-width: 50rem;
    margin-top: 2rem;
    margin-bottom: 3rem;

    &:first-child {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      margin-top: 0;
    }
  }

  .open {
    font-weight: bold;
    text-decoration: none;
    //noinspection CssInvalidFunction
    font-size: clamp(1rem, 4vw, 2.5rem);
  }

  .btn {
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px var(--color-shadow);
  }
</style>
