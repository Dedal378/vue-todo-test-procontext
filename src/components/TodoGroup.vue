<template>
  <section class="todo-group">
    <hr>

    <div class="todo-group__header">
      <h2>MAKE GROUP FOR TODOS</h2>
      <label for="todo-group__input"></label>
      <input v-model="todoTitle" id="todo-group__input" type="text" placeholder="group name">
      <button @click="newTodosGroup">Make new Todo's group</button>
    </div>
    <hr>

    <div class="todo-group__container">
      <section
          v-for="(group, i) of todoGroups"
          :key="i"
          class="todo-group__item"
      >
        <div class="left-col">
          <h3>GROUP NAME: {{ group.title }}</h3>
          <AddTodo @add-todo="addTodo" />
          <button
              @click="clearGroup"
              type="button">
            delete all cards
          </button>
          <button
              @click="deleteGroup"
              type="button">
            delete group
          </button>
        </div>

        <div class="right-col">
          <TodoList
              v-if="todoItems.length"
              :todos="todoItems"
              @remove-todo="removeTodo"
          />
          <p v-else>No todos!</p>
        </div>

      </section>
    </div>

  </section>
</template>

<script>
  import AddTodo from '@/components/AddTodo';
  import TodoList from '@/components/TodoList';
  import TodoItem from '@/components/TodoItem';
  import Loader from '@/components/Loader';

  export default {
    name: "TodoGroup",
    components: { AddTodo, TodoList, TodoItem, Loader },
    props: {
      todoGroups: Array,
      todoItems: Array,
    },
    data () {
      return {
        loading: true,
        todoTitle: '',
      }
    },
    methods: {
      newTodosGroup () {
        if (this.todoTitle.trim()) {
          const newGroup = {
            id: Date.now(),
            title: this.todoTitle,
          }
          this.todoGroups.push(newGroup)
          this.todoTitle = ''
        }
      },
      addTodo (newTodo) {
        this.todoItems.push(newTodo)
      },
      removeTodo (id) {
        this.todoItems = this.todoItems.filter(t => t.id !== id)
      },
      clearGroup () {
        return this.todoItems = []
      },
      deleteGroup (id) {
        this.$emit('delete-group', id)
      },
    },
  }
</script>

<style scoped lang="scss">
  .todo-group {
    width: 100%;
    min-height: 200px;
    margin-top: 5rem;
  }

  button {
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
      filter: invert(85%);
    }
  }

  .todo-group__header {
    margin-bottom: 1rem;

    h2 {
      text-transform: uppercase;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    & + hr {
      margin-bottom: 3rem;
    }
  }

  .todo-group__container {
    display: grid;
    justify-items: center;
    width: 100%;
    padding: 1rem;
  }

  .todo-group__item {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
    min-width: 310px;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 5px var(--color-shadow);
  }

  .left-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-right: 1px solid #ccc;
  }

  .right-col {
    width: 100%;
    height: 100%;
  }
</style>
