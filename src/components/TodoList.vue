<template>
  <section>
    <TodoItem
        v-for="(todo, i) of todos"
        :todo="todo"
        :index="i"
        @remove-todo="removeTodo"
    />
  </section>
</template>

<script>
  import TodoItem from './TodoItem';

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    props: {
      todos: {
        type: Array,
      },
    },
    methods: {
      removeTodo (id) {
        this.$emit('remove-todo', id)
      }
    },
  }
</script>

<style scoped lang="scss">
  section {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }
</style>
