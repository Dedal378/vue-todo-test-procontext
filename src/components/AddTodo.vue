<template>
  <form @submit.prevent="onSubmit">
    <label for="title"></label>
    <textarea id="title" v-model="title" rows="3"></textarea>
    <button type="submit">Create new card</button>
  </form>
</template>

<script>
  export default {
    name: "AddTodo",
    data () {
      return {
        title: ''
      }
    },
    methods: {
      onSubmit () {
        if (this.title.trim()) {
          const newTodo = {
            id: Date.now(),
            title: this.title,
            completed: false,
          }

          this.$emit('add-todo', newTodo)
          this.title = ''
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  form {
    display: flex;
    flex-direction: column;
    //noinspection CssInvalidFunction
    width: clamp(310px, 100vw, 65%);
    padding: 20px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: 7px;
    box-shadow: 0 1px 5px var(--color-shadow);
  }

  button {
    cursor: pointer;

    &:hover {
      filter: invert(85%);
    }
  }
</style>
