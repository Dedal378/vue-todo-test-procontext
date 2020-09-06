<template>
  <div>
    <AddTodo @add-todo="addTodo" />
    <Filters :filter="filter" />

    <Loader v-if="loading" />
    <TodoList
        v-else-if="todos.length"
        :todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>

  </div>
</template>

<script>
  import TodoList from '@/components/TodoList';
  import AddTodo from '@/components/AddTodo';
  import Loader from '@/components/Loader';
  import Filters from '@/components/Filters';

  export default {
    name: "Todos",
    components: {
      TodoList, AddTodo, Loader, Filters
    },
    data () {
      return {
        todos: [],
        loading: true,
        filter: 'all',
      }
    },
    methods: {
      removeTodo (id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo (newTodo) {
        this.todos.push(newTodo)
      }
    },
    mounted () {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 500)
        })
    },
    computed: {
      filteredTodos () {
        if(this.filter === 'all') {
          return this.todos
        }
        if (this.filter === 'completed') {
          return this.todos.filter(t => t.completed)
        }
        if (this.filter === 'not-completed') {
          return this.todos.filter(t => !t.completed)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 3rem;
  }
</style>
