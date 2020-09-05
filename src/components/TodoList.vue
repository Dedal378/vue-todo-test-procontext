<template>
  <div class="">
    <ul>
      <TodoItem
          v-for="(todo, i) of todos"
          :todo="todo"
          :index="i"
          @remove-todo="removeTodo"
      />
    </ul>
  </div>
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
        console.log(id)
        this.$emit('remove-todo', id)
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
