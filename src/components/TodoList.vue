<template>
  <transition name="fade">
    <section>
      <TodoItem
          v-for="(todo, i) of todos"
          :todo="todo"
          :index="i"
          @remove-todo="removeTodo"
      />
    </section>
  </transition>
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
      todosFinder: {
        type: Array,
      }
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
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem;

  }
</style>
