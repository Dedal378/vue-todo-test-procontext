<template>
  <transition name="fade">
    <section
        class="todo-list__wrapper"
        :id="id"
        @dragover.prevent
        @drop.prevent="drop"
    >
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
      todos: Array,
      todosFinder: Array,
      id: String,
    },
    methods: {
      removeTodo (id) {
        this.$emit('remove-todo', id)
      },
      drop (ev) {
        const data = ev.dataTransfer.getData("card_id");
        const card = document.getElementById(data);
        // card.style.display = "block";
        ev.target.appendChild(card);
        ev.dataTransfer.clearData();
      },
    },
  }
</script>

<style scoped lang="scss">
  .todo-list__wrapper {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 1rem;
    margin-bottom: 3rem;
    width: 100%;
    height: 100%;
    min-height: 300px;
  }
</style>
