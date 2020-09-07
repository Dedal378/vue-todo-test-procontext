<template>
  <transition name="fade">
    <div>
      <section class="filter">
        <label>
          <span>Filter todos by status</span>
          <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </label>

        <label for="search">
          <span>Find your note</span>
          <input v-model.trim="search" id="search" type="text" placeholder="text here">
        </label>
      </section>

      <div class="todos__counter">
        <span>All todos <strong>{{ todos.length }}</strong></span>
        <span>Completed todos <strong>{{ todos.filter(t => t.completed === true).length }}</strong></span>
        <span>Pending todos <strong>{{ todos.filter(t => t.completed === false).length }}</strong></span>
      </div>

      <Loader v-if="loading" />
      <TodoList
          v-else-if="todos.length"
          :todos="filteredTodos"
          @remove-todo="removeTodo"
      />
      <p v-else>No todos!</p>

      <AddTodo @add-todo="addTodo" />
      <TodoGroup
          :todoGroups="todoGroups"
          :todoItems="todoItems"
          @delete-group="deleteGroup"
      />
    </div>
  </transition>
</template>

<script>
  import TodoList from '@/components/TodoList';
  import AddTodo from '@/components/AddTodo';
  import Loader from '@/components/Loader';
  import TodoGroup from '@/components/TodoGroup';

  export default {
    name: "Todos",
    components: {
      TodoList, AddTodo, Loader, TodoGroup
    },
    data () {
      return {
        todos: [],
        loading: true,
        filter: 'all',
        search: '',
        todoGroups: [{ id: 1, title: '1' }],
        todoItems: [{ id: 1, title: '1', completed: true }],
      }
    },
    methods: {
      removeTodo (id) {
        this.todos = this.todos.filter(t => t.id !== id)
      },
      addTodo (newTodo) {
        this.todos.push(newTodo)
      },
      deleteGroup () {
        this.todoGroups = []
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
        let searchToLowerCase = this.search.toLowerCase();

        if (this.filter === 'all') {
          return this.todos.filter(todo => {
              return todo.title.toLowerCase().indexOf(searchToLowerCase) > -1
            }
          )
        }
        if (this.filter === 'completed') {
          return this.todos.filter(t => t.completed).filter(todo => {
              return todo.title.toLowerCase().indexOf(searchToLowerCase) > -1
            }
          )
        }
        if (this.filter === 'not-completed') {
          return this.todos.filter(t => !t.completed).filter(todo => {
              return todo.title.toLowerCase().indexOf(searchToLowerCase) > -1
            }
          )
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 3rem;
  }

  label {
    width: 100%;
    margin-bottom: 2rem;

    & span {
      margin: 0 10px;
    }
  }

  input {

    padding-left: 15px;
  }

  .filter {
    display: flex;
    width: 100%;
  }

  .todos__counter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    span {
      margin: 0 15px;

      strong {
        color: red;
      }
    }
  }

  @media (max-width: 740px) {
    .filter {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 560px) {
    .todos__counter {
      flex-direction: column;
    }
    .filter {
      width: 300px;
      text-align: center;
    }
  }
</style>
